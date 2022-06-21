import React, {useState} from "react";

// type RatingPopsType = {
//     value: number
// }

export function UncontrolledRating() {
    let[value, setValue]=useState(2)

    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}} />
            <Star selected={value > 1} setValue={()=>{setValue(2)}} />
            <Star selected={value > 2} setValue={()=>{setValue(3)}} />
            <Star selected={value > 3} setValue={()=>{setValue(4)}} />
            <Star selected={value > 4} setValue={()=>{setValue(5)}} />
        </div>)
}

type StarProps = {
    selected: boolean
    setValue: ()=>void

}

function Star(props: StarProps) {
    console.log("Star вызов")

    return <span onClick={()=>{props.setValue() }}> { props.selected ? <b>star </b>: "star"} </span>

    }
