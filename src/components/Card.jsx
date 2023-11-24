
import { Button } from "./CardCompontents/Button"
import { Title } from "./CardCompontents/Title"
import { Description } from "./CardCompontents/Description"
import { useState } from "react"
export const Card = ({title,description}) => {
    const [isDelete,setDelete] = useState(false)
    const handleButton = () => {
        
    }
    return (
        <div className="w-full h-48 bg-white rounded-3xl m-3 flex flex-col items-center">
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button onSelected={handleButton}>Usuń</Button>
        </div> 
    )
}