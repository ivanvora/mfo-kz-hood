import Plate from "@/components/plate";
import { Button, Input, Table, Typography } from "antd";
import React from "react";
import s from "./statements.module.css";
type Props = {};

export function StatementsPage({}: Props) {
  return (
    <div className={s.body}>
      <Typography.Title>Заявки</Typography.Title>
      <Plate className={s["plate_filter"]}>
        <div className={s.filter}>
          <Input placeholder="ФИО клиента"></Input>
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
      <Plate>
        <Table></Table>
      </Plate>
    </div>
  );
}
