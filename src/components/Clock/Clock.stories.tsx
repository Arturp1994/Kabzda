import React, {useEffect, useState} from 'react'
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnalog = ()=>{
    return <Clock mode={'analog'}/>
}

export const BaseDigital = ()=>{
    return <Clock mode={'digital'}/>
}

