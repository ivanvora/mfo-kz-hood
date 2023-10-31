import { Button } from 'antd'
import React, { useState } from 'react'
import s from './tabs.module.css'

type TItem = {
    id:string,
    text:string
}

type TProps = {
    items:TItem[] ,
    onClick:(id:string)=>void
}

export default function Tabs({items,onClick}: TProps) {
    const [selected,setSelected] = useState('');
  return (
    <div className={s.body} >
        {items.map(i=><Button 
            className={selected===i.id?s.selected:''}
            onClick={()=>{
                setSelected(i.id);
                onClick(i.id)}
            } 
            key={i.id} >{i.text}</Button>)}
    </div>
  )
}