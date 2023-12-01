
import { Button } from "./CardCompontents/Button"
import { Title } from "./CardCompontents/Title"
import { Description } from "./CardCompontents/Description"
import { Input } from "./CardCompontents/Input"
import { useState } from "react"
export const Card = ({title,description}) => {
    const [isExist,setDelete] = useState(true)
    const [isEdit,setEdit] = useState(false)
    const [editDescription,setDescription] = useState(description)
    const handleButton = () => {
        setDelete(!isExist)
    }
    const handleInput = (e) => {
        setDescription(e.target.value)
    }
    const submitData = (e) =>{
        if(e.key === 'Enter'){
            setEdit(!isEdit)
        }
    }
    return (
        <>
        {isExist ? (
        <div className="w-full h-48 bg-white rounded-3xl m-3 flex flex-col items-center">
            <Title>{title}</Title>
            {isEdit ? (<Input onKeyPress={(e) => submitData(e)} onChange={(e) => handleInput(e)} defaultValue={editDescription}/>) : (
                <Description onClick={() => setEdit(!isEdit)}>{editDescription}</Description>
            )}
            <Button onSelected={handleButton}>Usuń</Button>
        </div> ): undefined}
        </>   
    )
}