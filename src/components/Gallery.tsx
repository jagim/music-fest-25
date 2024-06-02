import { MouseEvent, useState } from "react"
import Modal from "./Modal"

export default function Gallery() {
    const [newPath, setNewPath] = useState<string>()
    const [flag, setFlag] = useState(false)

    const imgList = []
    for (let i = 1; i <= 12; i++) {
        imgList[i] = `./gallery/thumb/${i}.jpg`
    }

    const handleClick = (event: MouseEvent<HTMLImageElement>) => {
        const src = event.currentTarget.getAttribute('src')
        const path = src?.replace('thumb', 'display')!
        setNewPath(path)
        setFlag(true)
    }

    return (
        <section className="container mx-auto mt-16" id="gallery">
            <h3 className="text-4xl text-white font-extrabold uppercase text-center">Gallery</h3>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 p-4 my-10 justify-items-center">
                {imgList.map((path, index) => (
                    <img
                        key={index}
                        src={path} alt="gallery image"
                        className="w-full h-40 border-4 border-white hover:scale-110 hover:cursor-pointer object-cover object-center"
                        onClick={handleClick}
                    />
                ))}
            </div>
            {flag && <Modal newPath={newPath!} flag={flag} setFlag={setFlag} />}
        </section>
    )
}