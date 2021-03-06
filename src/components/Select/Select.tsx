import React, {useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPopsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPopsType) {

    const[active, setActive] = useState(false)
    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = ()=> setActive(!active)
    const onItemClick = (value:any)=>{
        props.onChange(value)
        toggleItems()
    }

    return (
        <div>

            <select>
                <option value=''>Minsk</option>
                <option value=''>Moscow</option>
                <option value=''>Kiev</option>
            </select>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                { active &&
                    <div>
                        {props.items.map(i => <div key={i.value}
                        onClick={()=>{onItemClick(i.value)}}>{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    )
}
