import { lineup } from "./../data/lineup.json"

export default function LineUp() {
    return (
        <section className="container mx-auto mt-20" id="lineup">
            <h3 className="text-4xl text-white font-extrabold uppercase text-center">Line Up</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-fit mx-auto">
                {lineup.map(dayEvent => (
                    <div key={dayEvent.day}>
                        <p className="text-3xl font-bold text-orange-500 text-center mt-6">Day: {dayEvent.day}</p>
                        <div className="w-full my-6 mx-auto border-[2px] border-slate-300 rounded-lg p-3 hover:shadow-slate-400 shadow-md transition-shadow">
                            {dayEvent.shows.map(show => (
                                <div key={show.artist} className="text-xl text-white flex justify-center py-2 px-5">
                                    <p className="font-bold px-2 boder border-r-2 border-green-600">Stage: {show.stage}</p>
                                    <p className="px-2 boder border-r-2 border-green-600">{show.hour} hs.</p>
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