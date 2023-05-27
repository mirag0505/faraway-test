import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPersonByNumberQuery } from "../service";
import { Button, Form, Input, InputNumber, Spin } from "antd";
// type EditorProps = {

// }

export const Editor: FC = () => {
  const { peopleId } = useParams();

  //TODO поправить строку peopleId!, и добавить адекватную проверку
  const { data, isLoading, error } = useGetPersonByNumberQuery(peopleId!);

  const navigate = useNavigate();


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
      string: "${label} is not a valid text!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <h1>Star wars</h1>
      <Button type="primary" onClick={() => navigate(-1)}>Back</Button>
      <Form
        {...layout}
        initialValues={data}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}>
        <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["height"]}
          label="Height"
          rules={[{ type: "string" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["hair_color"]}
          label="Hair color"
          rules={[{ type: "string" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["skin_color"]}
          label="Skin color"
          rules={[{ type: "string" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["mass"]}
          label="Mass"
          rules={[{ type: "number", min: 0 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["birth_year"]}
          label="Birth year"
          rules={[{ type: "string" }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};