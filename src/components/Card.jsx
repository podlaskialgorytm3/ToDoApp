
import { Button } from "./CardCompontents/Button"
import { Title } from "./CardCompontents/Title"
import { Description } from "./CardCompontents/Description"
import { useState } from "react"
export const Card = ({title,description}) => {
    const [isExist,setDelete] = useState(true)
    const [isEdit,setEdit] = useState(false)
    const handleButton = () => {
        setDelete(!isExist)
    }
    return (
        <>
        {isExist ? (
        <div className="w-full h-48 bg-white rounded-3xl m-3 flex flex-col items-center">
            <Title>{title}</Title>
            {isEdit ? (<input type="text" onDoubleClick={() => setEdit(!isEdit)}/>) : (
                <Description onClick={() => setEdit(!isEdit)}>{description}</Description>
            )}
            <Button onSelected={handleButton}>Usuń</Button>
        </div> ): undefined}
        </>   
    )
}