import { observer } from "mobx-react-lite";
import { Button, Col, Form, Input, message, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

const Investment = observer(() => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

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
        {t("investor")}
      </Typography.Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: t("name error") }]}
            >
              <Input
                placeholder={t("your name")}
                className="rounded-none p-3"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: t("email error"),
                },
              ]}
            >
              <Input
                placeholder={t("your email")}
                className="rounded-none p-3"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              name="subject"
              rules={[
                {
                  required: true,
                  message: t("subject error 2"),
                },
              ]}
            >
              <Input placeholder={t("subject")} className="rounded-none p-3" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              name="message"
              rules={[{ required: true, message: t("message error") }]}
            >
              <Input.TextArea
                placeholder={t("message")}
                className="rounded-none p-3"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t("send")}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
});

export default Investment;
