import { DetailItem } from '@/components/detail-item'
import Legend from '@/components/legend'
import { Button, Input } from 'antd'
import React from 'react'

import s from './kdn.module.css'

type Props = {}

export  function KDN({}: Props) {
  return (
    <div>
        <div>
        <Button >
            Редактировать
        </Button></div>

        <div className={s['main-container']}>
            <div className={s['grid-container']}>
                <Legend title={'Ежемесячный доход'}>
                <Input value={'300 000.00'} ></Input>
                </Legend>
                <Legend title={'Ежемесячные кредитные обязательства'}>
                <Input value={'32 000.00'} ></Input>
                </Legend>
                <Legend title={'Ежемесячные расходы'}>
                <Input value={'5000.00'}></Input>
                </Legend>
                <Legend title={'Дополнительные доходы'}>
                <Input value={'900'}></Input>
                </Legend>
                <Legend title={'Ежемесячное пополнение банковской карты'}>
                <Input value={'400 000.00'}></Input>
                </Legend>
                <Legend title={'Сумма депозита на банковском счету'}>
                <Input value={'-'}></Input>
                </Legend>
                <Legend title={'Cреднемесячная сумма расходов по дебетовой карте'}>
                <Input value={'-'}></Input>
                </Legend>
                <Legend title={'Среднемесячная сумма пополнений депозитов'}>
                <Input value={'-'}></Input>
                </Legend>
                <Legend title={'Среднемесячная сумма снятий с депозитов'}>
                <Input value={'-'}></Input>
                </Legend>
            </div>
            <div className={s['left-container']}>
                <DetailItem title='Дата расчета'>
11.04.2023 15:10:21
                </DetailItem>
                <DetailItem title='Значение'>
1.38
                </DetailItem>
                <DetailItem title='Пользователь'>
Иванов И
                </DetailItem>
            </div>
        </div>
    </div>
  )
}