import auth from "@/auth"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as z from 'zod'
const userSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

type SignupFormData = z.infer<typeof userSchema>

export default function Signup() {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const {
        registerUserMutate,
        isRegistering,
        registerError,
        loginUserMutate,
        isLoggingIn,
        loginError,
    } = auth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>(
        {
            resolver: zodResolver(userSchema)
        }
    )

    const onSubmit = (data: SignupFormData) => {
        if (isLogin) {
            loginUserMutate({ email: data.email, password: data.password }, {
                onSuccess: (user) => {
                    console.log("Logged in User:", user);
                    // Clear registerError after successful login
                    if (registerError) registerError.message = "";
                    navigate("/chat");
                },
                onError: (error) => {
                    console.error("Login Error:", error);
                }
            })
        } else {
            registerUserMutate({ email: data.email, password: data.password }, {
                onSuccess: (user) => {
                    if (loginError) loginError.message = "";
                    console.log("Registered User:", user);
                },
                onError: (error) => {
                    console.error("Registration Error:", error);
                }
            })
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="min-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>{isLogin ? "Login to your account" : "Create an account"}</CardTitle>
                    <CardDescription>
                        Enter your email below to {isLogin ? "login" : "create your account"}
                    </CardDescription>
                    <CardAction>
                        <Button variant="link" onClick={() => { isLogin ? setIsLogin(false) : setIsLogin(true) }}>{isLogin ? `Sign Up` : `Login`}</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    {...register("email")}
                                    id="email"
                                    placeholder="m@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    {...register("password")}
                                    id="password"
                                    type="password"
                                />
                                {errors.password && (
                                    <p className="text-red-500">{errors.password.message}</p>
                                )}
                            </div>
                        </div>
                        {(loginError || registerError)
                            &&
                            (
                                <p className="text-red-500 mt-2">
                                    {loginError?.message || registerError?.message}
                                </p>
                            )}
                        <div className="flex flex-col gap-2 mt-4">
                            <Button
                                type="submit" className="w-full">
                                {(isLoggingIn || isRegistering)
                                    ? "Processing..."
                                    : (isLogin ? "Login to your account" : "Create Account"
                                    )}
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {(isLoggingIn || isRegistering)
                                    ? "Processing..."
                                    : (isLogin ? "Create Account" : "Back to Login"
                                    )}
                            </Button>
                        </div>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}
