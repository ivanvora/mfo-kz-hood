import { DetailItem } from '@/components/detail-item'
import React from 'react'


import s from './biometrics.module.css'
type Props = {}

export  function Biometrics({}: Props) {
  return (
    <div className={s.container}>
                
        <DetailItem  title='Фотография, по которой проводилась проверка'>
                here must be a photo
        </DetailItem>

        <DetailItem  title='Тип биометрии'>
            Сверка с документами
        </DetailItem>
        <DetailItem  title='Флаг прохождения'>
            Да
        </DetailItem>
        <DetailItem  title='Вероятность (%)'>
            98%
        </DetailItem>
        <DetailItem  title='Качество (%)'>
            98%
        </DetailItem>
        <DetailItem  title='Схожесть (%)'>
            98%
        </DetailItem>
        <DetailItem  title='Отклонен'>

        </DetailItem>
    </div>
  )
}