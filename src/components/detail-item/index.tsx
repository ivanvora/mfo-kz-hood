import { Typography } from 'antd';
import React, { ReactNode } from 'react'

export type TProps={
    title:string;
    children:ReactNode
}

export function DetailItem ({title: header,children}:TProps){
   return <div>
            <Typography.Title style={{height:'5rem',fontSize:'1rem'}} level={5}>
               {header}
            </Typography.Title>
            <Typography.Text>
               {children}
            </Typography.Text>
        </div>
}