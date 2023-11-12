import { Button } from 'antd'
import React, { useState } from 'react'
import s from './tabs.module.css'

type TItem = {
    id:string,
    text:string
}

type TProps = {
    items:TItem[] ,
    onClick:(id:string)=>void,
    defaultSelected?:TItem['id']
}

export default function Tabs({items,onClick,defaultSelected}: TProps) {
    const [selected,setSelected] = useState(defaultSelected??'');
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