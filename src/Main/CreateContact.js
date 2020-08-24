import React from "react";
import { Form, Input, Button, Space, DatePicker, Select, Switch, message  } from "antd";
import Context from "./Context";

const CreateContact = ({ onCancelClick }) => {
    const [form] = Form.useForm();
    const { addNewContact } = React.useContext(Context);

    const { Option } = Select;

    const onFormFinish = (values) => {
        values.isEmergency = values.isEmergency? "Yes" : "No";
        values.birthday = values.birthday.format("DD-MM-YYYY")
        addNewContact(values);
        onCancelClick();
        message.success('Contact has been added!');
    };

  return (
    <Form form={form} onFinish={onFormFinish}>
        <Form.Item
            name="name"
            label="Name"
            rules={[
                {
                required: true,
                message: "Please input contact name",
                },
            ]}
            >
            <Input />
        </Form.Item>

        <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
                {
                required: true,
                message: "Please input phone number",
                },
            ]}
            >
            <Input />
        </Form.Item>

        <Form.Item
            name="birthday"
            label="Birthday"
            rules={[
                {
                required: true,
                message: "Please select brithday",
                },
            ]}
            >
            <DatePicker/>
        </Form.Item>

        <Form.Item
            name="gender"
            label="Gender"
            rules={[
                {
                required: true,
                message: "Please select a gender",
                },
            ]}
            >
            <Select style={{ width: 120 }}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
            </Select>
        </Form.Item>

        <Form.Item
            name="isEmergency"
            label="Add to Emergenct list?"
            >
            <Switch />
        </Form.Item>

        
        
        <Form.Item>
        <Space>
            <Button type="primary" htmlType="submit">
            Add Contact
            </Button>
            <Button type="primary" danger onClick={onCancelClick}>
            Cancel
            </Button>
        </Space>
        </Form.Item>
    </Form>
  );
};

export default CreateContact;
