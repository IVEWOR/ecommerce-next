import Link from "next/link"

export default function NavBar() {
    const navItems = [
        {
            name: "Home",
            url: "#"
        },
        {
            name: "About",
            url: "#"
        },
        {
            name: "Collection",
            url: "#"
        },
        {
            name: "Contact",
            url: "#"
        }
    ]
    return (
        <nav className="flex gap-x-8 justify-center">
            {navItems.map((item) => {
                return (
                    <div key={item.url}>
                        <Link href={item.url}>{item.name}</Link>
                    </div>
                )
            })}

        </nav>
    )
}