import React from "react";

type ItemType = {
    title: string
    value: any
}


export type AccordionProps = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: Array<ItemType>
    onClick: (value:any)=> void
}

export function Accordion(props: AccordionProps) {
        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    }

type AccordionTitleProps = {
    title: string
    onChange: ()=>void
}

function  AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle вывести")
    return(
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

export type AccordionBodyProps = {
    items: Array<ItemType>
    onClick: (value:any)=> void
}


function  AccordionBody(props: AccordionBodyProps) {
    console.log("AccordionBody вывести")
    return <ul>
        {props.items.map((i, index)=> <li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
}
