
import { Button } from "./CardCompontents/Button"
import { useState } from "react"
export const Card = ({title,description}) => {
    const [isDelete,setDelete] = useState(false)
    const handleButton = () => {
        
    }
    return (
        <div className="w-full h-48 bg-white rounded-3xl m-3 flex flex-col items-center">
            
            
            <Button onSelected={handleButton}>Usuń</Button>
        </div> 
    )
}