// src/MapComponent.jsx
import { useEffect, useMemo } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Icon } from "ol/style";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const Contacts = observer(() => {
  const { t } = useTranslation();
  const position: [number, number] = useMemo(() => [69.188222, 41.272833], []);
  const [form] = Form.useForm();

  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat(position)),
                style: new Style({
                  image: new Icon({
                    src: "https://openlayers.org/en/latest/examples/data/icon.png",
                    scale: 0.5,
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(position),
        zoom: 14,
      }),
    });

    return () => map.setTarget(undefined); // Komponent olib tashlanganda tozalash
  }, [position]);

  return (
    <div
      id="contacts"
      className={"px-5 md:px-10 lg:px-20 bg-[#000806] text-white py-10"}
    >
      <Divider />
      <h1 className={"font-semibold text-3xl text-center mb-5"}>
        {t("contacts")}
      </h1>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="rounded-2xl overflow-hidden">
            <div id="map" style={{ height: "300px", width: "100%" }} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div
            className="flex bg-cover bg-center object-cover p-5 rounded-2xl gap-3 md:gap-5"
            style={{ backgroundImage: `url("/images/trust-card-bg.png")` }}
          >
            <div className="flex">
              <img
                className={
                  "w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#16A34A] rounded-full p-3"
                }
                src="https://img.icons8.com/?size=50&id=7880&format=png&color=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className={"text-xl"}>{t("address")}</p>
              <p className={""}>{t("address desc")}</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div
            data-aos="fade-up-right"
            className="flex bg-cover bg-center object-cover p-5 rounded-2xl gap-3 md:gap-5"
            style={{ backgroundImage: `url("/images/trust-card-bg.png")` }}
          >
            <div className="flex">
              <img
                className={
                  "w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#16A34A] rounded-full p-3"
                }
                src="https://img.icons8.com/?size=50&id=9730&format=png&color=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className={"text-xl"}>{t("phone")}</p>
              <p className={"flex gap-2 justify-center items-center"}>
                +998 90 351 72 61{" "}
                <Link to={"tel:+998903517261"} target={"_blank"}>
                  <Button className={"capitalize"}>{t("call")}</Button>
                </Link>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div
            data-aos="fade-up-left"
            className="flex bg-cover bg-center object-cover p-5 rounded-2xl gap-3 md:gap-5"
            style={{ backgroundImage: `url("/images/trust-card-bg.png")` }}
          >
            <div className="flex">
              <img
                className={
                  "w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#16A34A] rounded-full p-3"
                }
                src="https://img.icons8.com/?size=50&id=lUktdBVdL4Kb&format=png&color=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className={"text-xl"}>{t("telegram")}</p>
              <p className={"flex gap-2 justify-center items-center"}>
                +998 90 351 72 61{" "}
                <Link to={"https://t.me/Mirkamol_Kodirov"} target={"_blank"}>
                  <Button>{t("boglanish")}</Button>
                </Link>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div
            data-aos="fade-up-right"
            className="flex bg-cover bg-center object-cover p-5 rounded-2xl gap-3 md:gap-5"
            style={{ backgroundImage: `url("/images/trust-card-bg.png")` }}
          >
            <div className="flex">
              <img
                className={
                  "w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#16A34A] rounded-full p-3"
                }
                src="https://img.icons8.com/?size=50&id=16733&format=png&color=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className={"text-xl"}>Whats app</p>
              <p className={"flex gap-2 justify-center items-center"}>
                +998 90 351 72 61{" "}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div
            data-aos="fade-up-left"
            className="flex bg-cover bg-center object-cover p-5 rounded-2xl gap-3 md:gap-5"
            style={{ backgroundImage: `url("/images/trust-card-bg.png")` }}
          >
            <div className="flex">
              <img
                className={
                  "w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#16A34A] rounded-full p-3"
                }
                src="https://img.icons8.com/?size=50&id=12623&format=png&color=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className={"text-xl"}>{t("electronic mail")}</p>
              <p className={""}>info@cloud-solutions.uz</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div
            data-aos="flip-up"
            className="flex bg-cover bg-center object-cover p-5 rounded-2xl gap-3 md:gap-5"
            style={{ backgroundImage: `url("/images/trust-card-bg.png")` }}
          >
            <Form form={form} className={"w-full"}>
              <Row gutter={[30, 0]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    rules={[{ required: true, message: t("name error") }]}
                    name={"name"}
                  >
                    <Input className="py-2" placeholder={t("your name")} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    rules={[{ required: true, message: t("email error") }]}
                    name={"email"}
                  >
                    <Input className="py-2" placeholder={t("your email")} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    rules={[{ required: true, message: t("subject error") }]}
                    name={"theme"}
                  >
                    <Input className="py-2" placeholder={t("theme")} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    rules={[{ required: true, message: t("message error") }]}
                    name={"message"}
                  >
                    <TextArea
                      className="py-2"
                      rows={5}
                      placeholder={t("message")}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="text-center">
                    <Button
                      onClick={() => form.submit()}
                      type={"primary"}
                      className={""}
                    >
                      {t("send 2")}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default Contacts;
