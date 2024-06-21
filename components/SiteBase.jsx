import Header from "@/components/header"

export default function SiteBase({ children }) {
    return (
        <>
            <Header />
            <main className="site-base">
                {children}
            </main>
        </>
    )
}