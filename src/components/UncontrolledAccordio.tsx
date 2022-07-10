import React, {useReducer, useState} from "react";

type AccordionProps = {
    titleValue: string
    // collapsed: boolean
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) =>{
    if (action.type === "TOGGLE-COLLAPSED"){
        return !state
    }
    return state
}

function UncontrolledAccordion(props: AccordionProps) {

    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

        return <div>
            {/*<AccordionTitle title={props.titleValue} onClick = {()=> {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick = {()=> {dispatch({type: "TOGGLE-COLLAPSED"})}}/>
            {!collapsed && <AccordionBody/>}
            {/*краткое написание условий с true и false*/}
        </div>
    }



type AccordionTitleProps = {
    title: string
    onClick: ()=>void
}

function  AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle вывести")
    return(
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

function  AccordionBody() {
    console.log("AccordionBody вывести")
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
export default UncontrolledAccordion;