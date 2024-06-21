export default function Header() {
    return (
        <div className="container mx-auto rounded-xl h-80 flex items-center justify-center bg-cover overflow-hidden relative" style={{ backgroundImage: `url("/imgs/static/collection.webp")` }}>
            <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0 right-0 bottom-0"></div>
            <h1 className="text-4xl font-semibold text-white z-10">Collections</h1>
        </div>
    )
}