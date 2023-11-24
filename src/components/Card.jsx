
export const Card = ({title,description}) => {
    return (
        <div className="w-full h-36 bg-white rounded-3xl m-3">
            <h1 className="text-3xl m-2 text-center font-[Montserrat]">{title}</h1>
            <p className="text-x m-2 font-[Montserrat] font-bold">{description}</p>
        </div>
    )
}