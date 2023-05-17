export const Header = () =>{
    return(
        <header className="w-full p-2 bg-purple-500 flex justify-between items-center">
            <h1 className="ml-4 text-2xl text-white font-bold">LOGO</h1>
            <ul className="flex">
                <li><a href="#" className="mr-4 text-slate-800 font-semibold text-xl">Home</a></li>
                <li><a href="#" className="mr-4 text-slate-800 font-semibold text-xl">Sobre</a></li>
                <li><a href="#" className="mr-4 text-slate-800 font-semibold text-xl">Contato</a></li>
            </ul>
        </header>
    )
}