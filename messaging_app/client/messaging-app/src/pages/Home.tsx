import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Moon, Sun } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const { theme, setTheme } = useTheme()

    return (
        <>
            <div className="fixed top-4 w-full pb-4 px-8">
                <div className="flex items-center justify-between">
                    <h1>MessagingApp</h1>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Button variant={'ghost'}>About</Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button
                                    onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }}
                                    variant={'secondary'}>
                                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                </Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button onClick={() => navigate("/signup")}>Log in</Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            <div className="flex w-full h-screen items-center justify-center">
                {/* hero section */}
                <div className="flex flex-col gap-4 items-center ">
                    <h1 className="text-primary text-6xl">This is Home</h1>
                    <p className="text-center font-extralight text-md text-foreground max-w-md">
                        Welcome to MessagingApp, a chat-based platform designed to help users connect and communicate with one another seamlessly. Join us to experience effortless communication.
                    </p>
                    <Button onClick={() => navigate("/signup")}>Create Account</Button>
                </div>
            </div>
        </>
    )
}