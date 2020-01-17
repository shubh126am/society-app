import React from "react";
import { Card, CardIcon, CardLabel, WrapperContent } from "./styles";
import { Row, Col } from "antd";
import { secondaryColors } from "../../../../styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const cards: any = [
  {
    name: "Flats",
    path: "/home/flat",
    icon: "building",
    color: secondaryColors.coral2
  },
  {
    name: "Owners",
    path: "/home/owner",
    icon: "user",
    color: secondaryColors.green40
  },
  {
    name: "Register a Flat",
    path: "/home/flat-registration",
    icon: "home",
    color: secondaryColors.orange1
  },
  {
    name: "Owner Registration",
    path: "/home/",
    icon: "plus",
    color: secondaryColors.purple2
  }
];

const Cards = () => {
  return (
    <WrapperContent>
      <Row gutter={[{ xs: 8, sm: 12, md: 16, lg: 32 }, 20]}>
        {cards.map(
          (card: {
            name: string;
            icon: IconProp;
            path: string;
            color: string;
          }) => {
            return (
              <Col span={6} key={card.name}>
                <Link to={`${card.path}`}>
                  <Card color={card.color}>
                    <CardIcon>
                      <FontAwesomeIcon
                        icon={card.icon}
                        size={"2x"}
                      ></FontAwesomeIcon>
                    </CardIcon>
                    <CardLabel>{card.name}</CardLabel>
                  </Card>
                </Link>
              </Col>
            );
          }
        )}
      </Row>
    </WrapperContent>
  );
};

export default Cards;
