import Plate from "@/components/plate";
import { Button, Input, Table, Typography } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import s from "./applications.module.css";
import { client } from "@/modules/api";
import { TApplication } from "@/modules/models/api/applications";
import type { ColumnsType } from 'antd/es/table';
import { useRouter } from "next/navigation";

type Props = {};

interface ITable {
  id:ReactNode;
  creationDate:string;
  planingCloseDate:string;
  status:string;
  FIO:string;
  IIN:string;
  phoneNum:string;
  email:string;
  city:string;
  loanAmmount:string;
  creditStatus:string;
  account:string;
}

export function ApplicationsPage({}: Props) {

  const [applications,setApplications] = useState<TApplication[]>([]);
  const router = useRouter();

  useEffect(()=>{
      client.applications.getApplications()
      .then(r=>{
        setApplications( r.data.data.data);
      }).catch((e)=>{
        console.log(e)
      })
  },[])

  const columns:ColumnsType<ITable> =[
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
    
    },
    {
      title: 'Дата и время создания',
      dataIndex: 'creationDate',
      key: 'creationDate',
    },
    {
      title: 'Планируемая дата закрытия',
      dataIndex: 'planingCloseDate',
      key: 'planingCloseDate',
    },
    {
      title: 'Статус заявки',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'ФИО',
      dataIndex: 'FIO',
      key: 'FIO',
    },
    {
      title: 'ИИН',
      dataIndex: 'IIN',
      key: 'IIN',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phoneNum',
      key: 'phoneNum',
    },
    {
      title: 'e-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Город',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Запрашиваемая сумма займа',
      dataIndex: 'loanAmmount',
      key: 'loanAmmount',
    },
    {
      title: 'Статус по займу',
      dataIndex: 'creditStatus',
      key: 'creditStatus',
    },
    {
      title: 'Номер счета',
      dataIndex: 'account',
      key: 'account',
    },
  ]

  const mapDataTable = (d:TApplication[]):ITable[]=>{
    return d.map(i=>({
      id:<Typography.Link key={i.id} onClick={()=>router.push(`/applications/application/${i.id}`)}>{i.id}</Typography.Link>,
      creationDate:i.created_at,
      planingCloseDate:i.product.end_date,
      city:'надо добавить в апи',
      account:'надо добавить в апи',
      email:'надо добавить в апи',
      creditStatus:i.status_type.label,
      FIO:`${i.customer.middlename} ${i.customer.firstname} ${i.customer.lastname}`,
      IIN:i.customer.iin,
      loanAmmount:i.request_loan_amount,
      phoneNum:'надо добавить в апи',
      status:i.status_type.label,
    }))
  }

  return (
    <div className={s.body}>
      <Typography.Title>Заявки</Typography.Title>
      <Plate className={s["plate_filter"]}>
        <div className={s.filter}>
          <Input placeholder="ФИО клиента" ></Input>
          <Input placeholder="Номер заявки"></Input>
          <Input placeholder="Дата создания заявки"></Input>
          <Input placeholder="Фактическая дата закрытия займа"></Input>
          <Input placeholder="ИИН"></Input>
          <Input placeholder="Статус заявки"></Input>
          <Input placeholder="Планируемая дата закрытия"></Input>
          <Input placeholder="Количество дней просрочки"></Input>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#071526",
              color: "white",
              width: "19.375rem",
            }}
          >
            Поиск
          </Button>
        </div>
      </Plate>
      <Plate className={s.table}>
        <Table columns={columns} rowKey={'id'} dataSource={mapDataTable(applications)}></Table>
      </Plate>
    </div>
  );
}
