import React, {useEffect, useState} from 'react'

type PropsType ={
    mode?: 'digital' | 'analog'
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props)=>{
    const [date, setDate]= useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setDate(new Date())
        }, 1000)
    },[])

    return <div>

        {props.mode === 'digital' ? <> <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </> : <>ANALOG</>
        }
    </div>
}


