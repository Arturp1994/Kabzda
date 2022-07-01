import React, {useState} from 'react';
import {Rating} from "./Reting";
import {action} from "@storybook/addon-actions";


export default {
  title: "Rating",
  component: Rating,
}


export const Rating4 = ()=> <Rating value={1} onClick={x=>x}/>
export const ControlledInput = ()=> {

  const[parentValue, setParentValue] = useState("")

  return <input value={parentValue} onChange={e => {setParentValue(e.currentTarget.value)}}/>

}

