import Plate from "@/components/plate";
import {  Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import s from "./application.module.css";
import { useParams, useRouter } from "next/navigation";
import Legend from "@/components/legend";
import Tabs from "@/components/tabs";
import BackIcon from "@/components/icons/back";
import { PersonalData } from "./personal-data";
import {Documents} from "./documents";
import {Contacts} from "./contacts";
import {ClientHistory} from "./client-history";
import {SMSLogs} from "./sms-logs";
import {Issuance} from "./issuance";
import {Details} from "./details";
import {Biometrics} from "./biometrics";
import {Accounts} from "./accounts";
import { KDN } from "./kdn";
import { TApplicationResponse } from "@/modules/models/api/applications";
import { client } from "@/modules/api";
import { TCustommerResponse } from "@/modules/models/api/customers";
type Props = {};

export function ApplicationPage({}: Props) {

  const [selectedTab,setSelectedTab] = useState('personalData');
  const [application,setApplication] = useState<TApplicationResponse>();
  const [customer,setCustomer] = useState<TCustommerResponse>();
const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(()=>{
    client.applications.getApplication(+id)
    .then(r=>setApplication(r.data.data))
    .catch(e=>console.log(e))
  },[])


  useEffect(()=>{
    if( application?.customer_id){
      client.applications.getCustomer(application.customer_id)
      .then(r=>setCustomer(r.data.data))
      .catch(e=>console.log(e))
    }
  },[application])

  const renderChoise=(v:string)=>{
    const r = {
      personalData:<PersonalData customer={customer} />,
      documents:<Documents/>,
      contacts:<Contacts/>,
      clientHistory:<ClientHistory/>,
      SMSLogs:<SMSLogs/>,
      issuance:<Issuance/>,
      details:<Details application={application}/>,
      biometrics:<Biometrics/>,
      KDN:<KDN/>,
      PKB:<Documents/>,
      GKB:<Documents/>,
      statusHistory:<Documents/>,
      product:<Documents/>,
      accounts:<Accounts/>,
      paymentsHistory:<Documents/>,
      debt:<Documents/>,
    } 
    return r[v];
  }


  return (
    <div className={s.body}>
     <div onClick={()=>router.back()} className={s.back}> 
   <BackIcon  style={{height:'1.25rem',width:'1.25rem'}}/>{' '}
     <Typography.Title level={2} style={{margin:0}} >{id}</Typography.Title>
     </div>
      <Plate className={s["plate_filter"]}>
        <div className={s.filter}>
          <Legend title={"№ заявки"}>
            <Input placeholder="№ заявки" value={application?.id}></Input>
          </Legend>
          <Legend title={"Статус"}><Input placeholder="Статус" value={application?.status_type_id}></Input></Legend>
          <Legend title={"Телефон"}><Input placeholder="Телефон" value={customer?.phones[0]}></Input></Legend>
          <Legend title={"Создан"}><Input placeholder="Создан" value={application?.created_at}></Input></Legend>
          <Legend title={"Продукт"}><Input placeholder="Продукт" value={application?.product_id}></Input></Legend>
          <Legend title={"Сумма"}><Input placeholder="Сумма" value={application?.request_loan_amount}></Input></Legend>
          <Legend title={"Срок в днях"}><Input placeholder="Срок в днях" value={application?.request_loan_term}></Input></Legend>
          <Legend title={"Одобрено"}><Input placeholder="Одобрено"></Input></Legend>
          <Legend title={"ФИО"}><Input placeholder="ФИО" value={`${customer?.middlename} ${customer?.firstname} ${customer?.lastname}`} ></Input></Legend>
          <Legend title={"ИИН"}><Input placeholder="ИИН" value={customer?.iin}></Input></Legend>
          <Legend title={"Адрес электронной почты"} ><Input placeholder="Адрес электронной почты"></Input></Legend>
        </div>
      </Plate>
      <Plate className={s['plate_data']}>
        <section className={s.tabs}>
          <Tabs defaultSelected="personalData" onClick={(id)=>setSelectedTab(id)} 
          items={[
            {id:'personalData',text:'Личные данные'},
            {id:'documents',text:'Документы'},
            {id:'contacts',text:'Контакты'},
            {id:'clientHistory',text:'История клиента'},
            {id:'SMSLogs',text:'Логи СМС'},
            {id:'issuance',text:'Выдача'},
            {id:'details',text:'Детали заявки'},
            {id:'biometrics',text:'Биометрия'},
            {id:'KDN',text:'КДН'},
            {id:'PKB',text:'ПКБ'},
            {id:'GKB',text:'ГКБ'},
            {id:'statusHistory',text:'История статусов'},
            {id:'product',text:'Продукт'},
            {id:'accounts',text:'Счета'},
            {id:'paymentsHistory',text:'История платежей'},
            {id:'debt',text:'Задолжность'},
            ]} />
        </section>
        {renderChoise(selectedTab)}
      </Plate>
    </div>
  );
}
