import React from "react";
import { Table, Space, Button, Divider } from "antd";
import Context from "./Context";

const ContactList = ({ onAddNewClick }) => {
  const { contacts } = React.useContext(Context);

  const onDelete = (name) => {
    contacts = contacts.map(contact => {if(contact.name !== name) return contact});
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Emergency",
      dataIndex: "isEmergency",
      key: "isEmergency",
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Update</a>
          <a onClick={() => onDelete(record.name)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space>
        <Button type="primary" onClick={onAddNewClick}>
          Add new contact
        </Button>
      </Space>
      <Divider />
      <Table dataSource={contacts} columns={columns} />
    </>
  );
};

export default ContactList;
