import Image from "next/image"

export default function Logo() {
    return (
        <div className="">
            <Image src={"/imgs/static/logo.avif"} width={110} height={38} />
        </div>
    )
}