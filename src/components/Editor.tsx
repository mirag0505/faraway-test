import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPersonByNumberQuery } from "../service";
import { Button, Form, Input, InputNumber, Spin, Typography } from "antd";
import { useAppDispatch } from "../redux/slicer";
import { updatePerson } from "../redux/reducers/personsInfoReducer";

// type EditorProps = {}

export const Editor: FC = () => {
  const { peopleId } = useParams();
  const [form] = Form.useForm();
  //TODO поправить строку peopleId!, и добавить адекватную проверку
  const { data, isLoading, error } = useGetPersonByNumberQuery(peopleId!);
  const dispatch = useAppDispatch();
  const { Title } = Typography;

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
      <Button type="primary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Title level={2}>List of starwars characters</Title>
      <Form
        {...layout}
        form={form}
        initialValues={data}
        name="nest-messages"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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
        <Form.Item name={["mass"]} label="Mass" rules={[{ type: "number" }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["birth_year"]}
          label="Birth year"
          rules={[{ type: "string" }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            onClick={() => dispatch(updatePerson(form.getFieldsValue()))}
            type="primary">
            Local update data
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
