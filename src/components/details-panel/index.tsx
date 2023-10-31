import { Typography } from 'antd';
import React from 'react';
import s from './details-panel.module.css';

type Props = {
    icon?:React.ReactNode;
    title:string;
    children?:React.ReactNode;
}

export default function DetailsPanel({title,icon,children}: Props) {

  return (
    <div className={s.body}>
        
        <div className={s.content}>
            <div className={s.title}>
                <div className={s.icon}>
                    {icon}
                </div>
                <Typography.Text>
                    {title}
                </Typography.Text>
            </div>
            {children}
        </div>
    </div>
  )
}