
export const Card = ({title,description}) => {
    return (
        <div className="w-full h-48 bg-white rounded-3xl m-3 flex flex-col items-center">
            <h1 className="text-3xl m-2 text-center font-[Montserrat]">{title}</h1>
            <p className="text-x m-2 font-[Montserrat] font-bold p-2">{description}</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Usuń</button>
        </div>
    )
}