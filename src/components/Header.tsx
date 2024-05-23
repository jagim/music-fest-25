export default function Header() {
    return (
        <header id="header">
            <div className="container mx-auto text-white p-6 flex justify-between">
                <h1 className="text-6xl font-black">Music Festival {' '}
                    <span className="text-3xl text-orange-400 font-bold">2025</span>
                </h1>
                <nav className="flex text-xl gap-3">
                    <a className="hover:text-yellow-400 hover:border-yellow-400 border border-white p-4 rounded-lg" href="#lineup">Line Up</a>
                    <a className="hover:text-yellow-400 hover:border-yellow-400 border border-white p-4 rounded-lg" href="#gallery">Galery</a>
                    <a className="hover:text-yellow-400 hover:border-yellow-400 border border-white p-4 rounded-lg" href="#tickets">Tickets</a>
                </nav>
            </div>
            <div>
                <img className="w-full object-cover" src="./banner.jpg" alt="music festival banner" />
                <div className="container mx-auto text-right relative">
                    <h2 className="text-4xl text-yellow-400 font-extrabold uppercase absolute bottom-20 right-0">Rock & EDM Music Festival</h2>
                    <p className="text-2xl text-white font-extrabold absolute bottom-10 right-0">July 2025, Copenhagen - Denmark.</p>
                </div>
            </div>
        </header >
    )
}