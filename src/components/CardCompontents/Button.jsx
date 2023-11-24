export const Button = ({children,onSelected}) => (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    onClick={onSelected}
    >{children}</button>
)