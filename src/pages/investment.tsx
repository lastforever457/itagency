import { observer } from "mobx-react-lite";
import { Button, Col, Form, Input, message, Row, Typography } from "antd";

const Investment = observer(() => {
  const [form] = Form.useForm();

  const onFinish = async (values: Record<string, any>) => {
    try {
      //@ts-expect-error Skip
      await window.Email.send({
        SecureToken: "3951ea87-91f1-4829-9e08-0276c9455534",
        From: "lastforever149@gmail.com",
        To: "lastforever174@gmail.com",
        Subject: values.subject,
        Body: `Имя: ${values.name}<br>Email: ${values.email}<br>Сообщение: ${values.message}`,
      });
      message.success(`Email successfully sent!`);
      form.resetFields();
    } catch (error) {
      message.error("Error sending email: " + error);
    }
  };

  return (
    <div
      id={"investors"}
      className={"px-5 md:px-10 lg:px-20 bg-[#000806] text-white py-10"}
    >
      <Typography.Title level={1} className={"text-center mb-7"}>
        Стать инвестором
      </Typography.Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Пожалуйста, введите ваше имя" },
              ]}
            >
              <Input placeholder="Ваше имя" className="rounded-none p-3" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Пожалуйста, введите ваш email",
                },
              ]}
            >
              <Input placeholder="Ваш Email" className="rounded-none p-3" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите предмет",
                },
              ]}
            >
              <Input placeholder="Предмет" className="rounded-none p-3" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Пожалуйста, введите сообщение" },
              ]}
            >
              <Input.TextArea
                placeholder="Сообщение"
                className="rounded-none p-3"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Оставить заявку
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
});

export default Investment;
