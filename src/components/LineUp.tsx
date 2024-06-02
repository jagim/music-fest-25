import { lineup } from "./../data/lineup.json"

export default function LineUp() {
    return (
        <section className="container mx-auto mt-20" id="lineup">
            <h3 className="text-4xl text-white font-extrabold uppercase text-center">Line Up</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-fit mx-auto">
                {lineup.map(dayEvent => (
                    <div key={dayEvent.day}>
                        <p className="text-3xl font-bold text-orange-500 text-center mt-6">Day: {dayEvent.day}</p>
                        <div className=" h-[22rem] mt-8 border-2 border-slate-300 rounded-lg p-3 hover:shadow-slate-400 shadow-md transition-shadow">
                            {dayEvent.shows.map(show => (
                                <div key={show.artist} className="text-xl text-white flex p-2 mt-2 border-b-2 border-green-600 last-of-type:border-0" >
                                    <p className="font-medium px-2 border-r-2 border-green-600">Stage: {show.stage}</p>
                                    <p className="px-2 border-r-2 border-green-600">{show.hour} hs.</p>
                                    <p className="text-orange-400 font-bold px-2">{show.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}