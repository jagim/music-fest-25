import { tickets } from "../data/tickets.json"

type Ticket = {
    days: string;
    price: number;
    includes: TicketInclude[];
};

type TicketInclude = {
    [key: string]: string;
}

export default function Tickets() {
    return (
        <section className="container mx-auto mt-20" id="tickets">
            <h3 className="text-4xl text-white font-extrabold uppercase text-center">Tickets</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto">
                {tickets.map((dayTicket: Ticket, index: number) => (
                    <div
                        key={index}
                        className="border border-orange-400 mt-10 flex flex-col max-w-[25rem] rounded-xl hover:shadow-orange-500 shadow-md transition-shadow">
                        <p className="text-3xl font-bold text-orange-500 text-center p-3 underline border-b border-orange-500">
                            {dayTicket.days} Day Pass
                        </p>
                        <p className="text-2xl font-semibold text-white p-2 ml-8">Include:</p>
                        <div className="flex-1 flex flex-row justify-between">
                            <ul className="text-xl text-white list-none mx-auto">
                                {dayTicket.includes.map((include, i) => (
                                    <li key={i} className="p-3">
                                        {Object.keys(include).map((key) => (
                                            <p key={key}># {include[key]}</p>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <footer className="w-full border-t border-orange-500 mt-2">
                            <p className="text-3xl font-semibold text-center text-green-400 p-3">$ {dayTicket.price}.-</p>
                        </footer>
                    </div>
                ))}
            </div>
        </section>
    );
}
