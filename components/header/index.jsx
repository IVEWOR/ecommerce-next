import NavBar from "./NavBar"
import Logo from "./Logo"
import Icons from "./Icons"

export default function Headers() {
    return (
        <header className="container mx-auto px-2 py-4 border-b grid grid-cols-3 justify-between items-center">
            <Logo />
            <NavBar />
            <Icons />
        </header>
    )
}