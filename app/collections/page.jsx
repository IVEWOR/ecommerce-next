import SiteBase from "@/components/SiteBase"
import BreadCrumb from "@/components/breadcrumb/BreadCrumb"
import Header from "./Header"
import Card from "./Card"

export default function Collections() {
    return (
        <SiteBase>
            <BreadCrumb currentPageLink="#" currentPageText="Collections" />
            <Header />
            <Card />
        </SiteBase>
    )
}