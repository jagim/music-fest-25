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
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3 my-10 justify-items-center">
                {imgList.map(path => (
                    <div key={path} className="border border-white" >
                        <img
                            src={path} alt="gallery image"
                            className="hover:scale-110 hover:cursor-pointer object-cover w-full h-48"
                            onClick={handleClick}
                        />
                    </div>
                ))}
            </div>
            {flag && <Modal newPath={newPath!} flag={flag} setFlag={setFlag} />}
        </section>
    )
}