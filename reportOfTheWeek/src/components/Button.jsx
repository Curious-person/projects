export default function Button({ children, onClick }) {
    return (
        <button
            className='bg-background border border-[#2B2B2D] py-2 px-4 rounded'
            onClick={onClick}
        >
            {children}
        </button>
    )
}
