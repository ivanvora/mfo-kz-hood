import { DetailItem } from '@/components/detail-item'
import { Typography } from 'antd'
import React, { ReactNode } from 'react'

import s from './details.module.css'
import { TApplicationResponse } from '@/modules/models/api/applications'

type Props = {application:TApplicationResponse}

export  function Details({application}: Props) {
  return (
    <div className={s.container}>
        <DetailItem title='Запрашиваемая сумма займа'>
            {application?.request_loan_amount}
        </DetailItem>
        <DetailItem title='Запрашиваемая срок займа'>
            {application?.request_loan_term}
        </DetailItem>
        <DetailItem title='Выбранная клиентом сумма займа'>
            {application?.selected_loan_amount}
        </DetailItem>
        <DetailItem title='Выбранная клиентом срок займа'>
            {application?.selected_loan_term}
        </DetailItem>
        <DetailItem title='Согласование андеррайтером суммы займа'>
            {application?.agreed_loan_amount}
        </DetailItem>
        <DetailItem title='Согласование андеррайтером срока займа'>
           {application?.agreed_loan_term}
        </DetailItem>
        <DetailItem title='Цель выдачи'>
            need add to api
        </DetailItem>
        <DetailItem title='Признак АСП'>
            need add to api
        </DetailItem>
    </div>
  )
}

