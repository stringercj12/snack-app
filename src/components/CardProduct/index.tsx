import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  Container,
  ContainerImage,
  Discount,
  DiscountText,
  ContainerInfo,
  Title,
  SubTitle,
  Price,
  Image,
  BeforePrice,
  ButtonCart,
} from "./styles";
import pizza from "../../assets/pizza2.png";

export function CardProduct() {
  return (
    <Container>
      <ContainerImage>
        <Discount>
          <DiscountText>20%</DiscountText>
        </Discount>
        <Image source={pizza} />
      </ContainerImage>
      <ContainerInfo>
        <Title>Pizza veloper</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,
          consetetur
        </SubTitle>
        <Price>$150.00 </Price>
        <BeforePrice>Antes $170.00</BeforePrice>

        <ButtonCart>
          <SimpleLineIcons name="handbag" size={14} color="#ffffff" />
        </ButtonCart>
      </ContainerInfo>
    </Container>
  );
}
