import Image from "next/image"
import Link from "next/link"

export default function Card() {
    return (
        <div className="container mx-auto mt-20 grid grid-cols-4 gap-4">
            <div className="bg-zinc-100 rounded-2xl overflow-hidden product-card relative">
                <div className="relative">
                    <Image className="width-full  height-full top-0 featured-img-f" src={"/imgs/static/pf.webp"} width={400} height={400} alt="product card" />
                    <Image className="height-full width-full absolute left-0 top-0 featured-img-b" src={"/imgs/static/pb.webp"} width={400} height={400} alt="product card" />
                    <Link className="product-card-btn absolute bottom-2 left-0 right-0 text-center bg-black text-white rounded-3xl py-3 px-8 w-10/12 mx-auto" href="#">View Products</Link>
                </div>
                <div className="p-6">
                    <h3 className="font-semibold">Sunscreen lotion</h3>
                </div>
                <Link className="absolute top-0 left-0 right-0 bottom-0" href="#"><span className="sr-only">Shop Now</span></Link>
            </div>
        </div>
    )
}