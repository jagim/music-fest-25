export default function About() {
    return (
        <section className="container mx-auto mt-20 flex gap-10">
            <div className="w-3/4 text-right">
                <h2 className="text-3xl font-extrabold text-white mt-10">The Biggest EU Music Festival</h2>
                <p className="text-xl text-yellow-400 font-bold mt-6">July 2025 | Copenhagen-Denmark.</p>
                <p className="text-xl text-white mt-6 leading-8">Quisque id mi euismod, condimentum mi eu, venenatis felis. Nam ullamcorper ultrices lacus, feugiat feugiat augue. Aliquam nec iaculis turpis. Etiam in vehicula orci. Sed ullamcorper eget tortor a auctor. Aliquam vel leo pharetra nisi gravida pellentesque. Vestibulum quis sem quis purus porttitor efficitur.</p>
            </div>
            <div className="w-full">
                <img src="./about.jpg" alt="about image" />
            </div>
        </section>
    )
}