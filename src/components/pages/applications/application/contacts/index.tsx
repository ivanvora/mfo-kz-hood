import { Button, Table } from 'antd'
import React from 'react'

type Props = {}

export  function Contacts({}: Props) {
  return (
    <div>
        <Button>Добавить контакт</Button>
        <Table/>
    </div>
  )
}