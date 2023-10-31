import Plate from "@/components/plate";
import {  Input, Table, Typography } from "antd";
import React, { useState } from "react";
import s from "./statement.module.css";
import { useParams } from "next/navigation";
import Legend from "@/components/legend";
import Tabs from "@/components/tabs";
import BackIcon from "@/components/icons/back";
import DetailsPanel from "@/components/details-panel";
import AccountIcon from "@/components/icons/account";
import DocumentIcon from "@/components/icons/document";
import GeoPositionIcon from "@/components/icons/geoposition";
import BriefcaseIcon from "@/components/icons/briefcase";
type Props = {};

export function StatementPage({}: Props) {

const [selectedTab,setSelectedTab] = useState('personalData')

   const params = useParams();
   const id = params.id;


   const personalDataRender = ()=>
   <div className={s['personal_data']}>
   <DetailsPanel icon={<AccountIcon  />} title="Контактная информация">
    <Legend title={'Мобильный телефон'}>
      <Typography.Text>
        + 7 771 *** *5 35
      </Typography.Text>
    </Legend>
    <Legend title={'Почта'}>
      <Typography.Text>
        name@e-mail.kz
      </Typography.Text>
    </Legend>
   </DetailsPanel>
   <DetailsPanel icon={<DocumentIcon  />} title="Данные из удостоверения 
личности">
    <Legend title={'Фамилия'}>
      <Typography.Text>
        Иван
      </Typography.Text>
    </Legend>
    <Legend title={'Имя'}>
      <Typography.Text>
        Иванов
      </Typography.Text>
    </Legend>
    <Legend title={'Отчество'}>
      <Typography.Text>
        Иванович
      </Typography.Text>
    </Legend>
    <Legend title={'Пол'}>
      <Typography.Text>
        Мужской
      </Typography.Text>
    </Legend>
    <Legend title={'Дата рождения'}>
      <Typography.Text>
        27.02.2001
      </Typography.Text>
    </Legend>
    <Legend title={'Тип документа'}>
      <Typography.Text>
       Тип документа
      </Typography.Text>
    </Legend>
   </DetailsPanel>
   
   <DetailsPanel icon={<GeoPositionIcon  />} title="Адрес">
    <Legend title={'Регион регистрации'}>
      <Typography.Text>
        Иван
      </Typography.Text>
    </Legend>
    <Legend title={'Адрес регистрации'}>
      <Typography.Text>
        Иванов
      </Typography.Text>
    </Legend>
    <Legend title={'Регион проживания'}>
      <Typography.Text>
        Иванович
      </Typography.Text>
    </Legend>
    <Legend title={'Фактический адрес проживания'}>
      <Typography.Text>
        Мужской
      </Typography.Text>
    </Legend>
    <Legend title={'Время проживания по текущему адресу'}>
      <Typography.Text>
        27.02.2001
      </Typography.Text>
    </Legend>
    <Legend title={'Домашний телефон'}>
      <Typography.Text>
       Тип документа
      </Typography.Text>
    </Legend>
   </DetailsPanel>

   <DetailsPanel icon={<BriefcaseIcon  />} title="Доходы">
    <Legend title={'Образование'}>
      <Typography.Text>
        Магистратура, 2-ое высшее, Ученая 
степень и пр.
      </Typography.Text>
    </Legend>
    <Legend title={'Занятость'}>
      <Typography.Text>
        Сотрудник организации
      </Typography.Text>
    </Legend>
    <Legend title={'Занимаемая должность'}>
      <Typography.Text>
        Начальник
      </Typography.Text>
    </Legend>
    <Legend title={'Работодатель'}>
      <Typography.Text>
        ДБ АО Банк Хоум Кредит
      </Typography.Text>
    </Legend>
    <Legend title={'Вид деятельности'}>
      <Typography.Text>
      Финансы, банки, страхование, 
консалтинг
      </Typography.Text>
    </Legend>
   </DetailsPanel>
   </div>

const documentsRendering = ()=><Table/>

const renderChoise={
  personalData:personalDataRender(),
  documents:documentsRendering()
}


  return (
    <div className={s.body}>
     <div className={s.back}> 
     <BackIcon style={{height:'1.25rem',width:'1.25rem'}}/>
     <Typography.Title style={{margin:0}} >{id}</Typography.Title>
     </div>
      <Plate className={s["plate_filter"]}>
        <div className={s.filter}>
          <Legend title={"№ заявки"}>
            <Input placeholder="№ заявки"></Input>
          </Legend>
          <Legend title={"Статус"}><Input placeholder="Статус"></Input></Legend>
          <Legend title={"Телефон"}><Input placeholder="Телефон "></Input></Legend>
          <Legend title={"Создан"}><Input placeholder="Создан"></Input></Legend>
          <Legend title={"Продукт"}><Input placeholder="Продукт"></Input></Legend>
          <Legend title={"Сумма"}><Input placeholder="Сумма"></Input></Legend>
          <Legend title={"Срок в днях"}><Input placeholder="Срок в днях"></Input></Legend>
          <Legend title={"Одобрено"}><Input placeholder="Одобрено"></Input></Legend>
          <Legend title={"ФИО"}><Input placeholder="ФИО"></Input></Legend>
          <Legend title={"ИИН"}><Input placeholder="ИИН"></Input></Legend>
          <Legend title={"Адрес электронной почты"}><Input placeholder="Адрес электронной почты"></Input></Legend>
        </div>
      </Plate>
      <Plate className={s['plate_data']}>
        <section className={s.tabs}>
          <Tabs  onClick={(id)=>setSelectedTab(id)} 
          items={[
            {id:'personalData',text:'Личные данные'},
            {id:'documents',text:'Документы'}
            ]} />
        </section>
        {renderChoise[selectedTab as keyof typeof renderChoise]}
      </Plate>
    </div>
  );
}
