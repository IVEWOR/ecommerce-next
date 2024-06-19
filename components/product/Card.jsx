import Image from "next/image"

export default function Card() {
    return (
        <div className="container mx-auto mt-20 grid grid-cols-4 gap-4">
            <div className="bg-zinc-100 rounded-2xl overflow-hidden product-card">
                <div className="relative">
                    <Image className="width-full  height-full top-0 featured-img-f" src={"/imgs/static/pf.webp"} width={400} height={400} alt="product card" />
                    <Image className="height-full width-full absolute left-0 top-0 featured-img-b" src={"/imgs/static/pb.webp"} width={400} height={400} alt="product card" />
                </div>
                <div className="p-6">
                    <div className="text-xs text-zinc-400 uppercase">Cream</div>
                    <h3 className="mt-2">Sunscreen lotion</h3>
                    <div className="mt-1">$39.00</div>
                </div>
            </div>
        </div>
    )
}