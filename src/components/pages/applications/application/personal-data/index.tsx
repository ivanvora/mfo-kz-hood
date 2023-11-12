import DetailsPanel from '@/components/details-panel'
import AccountIcon from '@/components/icons/account'
import BriefcaseIcon from '@/components/icons/briefcase'
import DocumentIcon from '@/components/icons/document'
import GeoPositionIcon from '@/components/icons/geoposition'
import Legend from '@/components/legend'
import { Typography } from 'antd'
import React from 'react'

import s from './personal-data.module.css';
import { TCustommerResponse } from '@/modules/models/api/customers'

type Props = {
  customer:TCustommerResponse
}

export  function PersonalData({customer}: Props) {
  return (
    <div className={s['personal_data']}>
   <DetailsPanel icon={<AccountIcon  />} title="Контактная информация">
    <Legend title={'Мобильный телефон'}>
      <Typography.Text>
       {customer?.phones}
      </Typography.Text>
    </Legend>
    <Legend title={'Почта'}>
      <Typography.Text>
       need to add api
      </Typography.Text>
    </Legend>
   </DetailsPanel>
   <DetailsPanel icon={<DocumentIcon  />} title="Данные из удостоверения 
личности">
    <Legend title={'Фамилия'}>
      <Typography.Text>
        {customer?.middlename}
      </Typography.Text>
    </Legend>
    <Legend title={'Имя'}>
      <Typography.Text>
        {customer?.firstname}
      </Typography.Text>
    </Legend>
    <Legend title={'Отчество'}>
      <Typography.Text>
       {customer?.lastname}
      </Typography.Text>
    </Legend>
    <Legend title={'Пол'}>
      <Typography.Text>
        {customer?.gender_id}
      </Typography.Text>
    </Legend>
    <Legend title={'Дата рождения'}>
      <Typography.Text>
       {customer?.birth_date}
      </Typography.Text>
    </Legend>
    <Legend title={'Тип документа'}>
      <Typography.Text>
       need add to api
      </Typography.Text>
    </Legend>
   </DetailsPanel>
   
   <DetailsPanel icon={<GeoPositionIcon  />} title="Адрес">
    <Legend title={'Регион регистрации'}>
      <Typography.Text>
        need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Адрес регистрации'}>
      <Typography.Text>
      need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Регион проживания'}>
      <Typography.Text>
      need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Фактический адрес проживания'}>
      <Typography.Text>
        need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Время проживания по текущему адресу'}>
      <Typography.Text>
       need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Домашний телефон'}>
      <Typography.Text>
      need add to api
      </Typography.Text>
    </Legend>
   </DetailsPanel>

   <DetailsPanel icon={<BriefcaseIcon  />} title="Доходы">
    <Legend title={'Образование'}>
      <Typography.Text>
            need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Занятость'}>
      <Typography.Text>
          need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Занимаемая должность'}>
      <Typography.Text>
           need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Работодатель'}>
      <Typography.Text>
           need add to api
      </Typography.Text>
    </Legend>
    <Legend title={'Вид деятельности'}>
      <Typography.Text>
         need add to api
      </Typography.Text>
    </Legend>
   </DetailsPanel>
   </div>
  )
}