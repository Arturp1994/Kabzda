import React from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
}

function Accordion(props: AccordionProps) {
        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
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

function  AccordionBody() {
    console.log("AccordionBody вывести")
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
export default Accordion;