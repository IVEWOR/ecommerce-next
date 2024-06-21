import Link from "next/link"

export default function BreadCrumb({ currentPageLink, currentPageText }) {
    return (
        <div className="container mx-auto p-2 my-4">
            <ul className="flex gap-4 text-xs justify-center">
                <li>
                    <Link href="#">Home</Link>
                </li>
                /
                <li>
                    <Link href={currentPageLink}>{currentPageText}</Link>
                </li>
            </ul>
        </div>
    )
}