import { Dispatch, MouseEvent, SetStateAction } from "react"

type Modal = {
    newPath: string
    flag: boolean
    setFlag: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ newPath, flag, setFlag }: Modal) {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.getAttribute('id') === "close") {
            const newFlag = !flag
            setFlag(newFlag)
        }
        removeEventListener
    }

    return (
        <>
            <div id="overlay" className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/[0.6]">
                <div id="image-container" className="w-[1000px] min-h-[100px] bg-slate-100 p-1">
                    <img src={newPath} alt="gallery image" />
                </div>
                <button
                    id="close"
                    className="bg-slate-200 p-4 absolute bottom-[100px] rounded-2xl font-bold hover:bg-yellow-400"
                    onClick={handleClick}
                >x</button>
            </div>
        </>
    )
}