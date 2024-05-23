export default function Footer() {
    return (
        <footer className="mt-20 bg-zinc-800">
            <div className="container mx-auto flex p-5 justify-between">
                <h1 className="text-4xl text-white font-black">Music Festival {' '}
                    <span className="text-2xl text-orange-400 font-bold">2025</span>
                </h1>
                <nav className="flex gap-5 justify-center items-center">
                    <a href="https://www.instagram.com/@musicfes25">
                        <img src="/icons/instagram-icon.svg" alt="instagram icon" className="w-14 p-3 hover:scale-125" />
                    </a>
                    <a href="https://www.facebook.com/@musicfes25">
                        <img src="/icons/facebook-icon.svg" alt="instagram icon" className="w-14 p-3 hover:scale-125" />
                    </a>
                    <a href="https://www.youtube.com/@musicfes25">
                        <img src="/icons/youtube-icon.svg" alt="instagram icon" className="w-14 p-3 hover:scale-125" />
                    </a>
                </nav>
                <a className="text-2xl font-bold text-white hover:text-yellow-400" href="#header">Top ⮭</a>
            </div>

        </footer>
    )
}