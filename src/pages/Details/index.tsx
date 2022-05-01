import React, { useState } from "react";
import {
  Container,
  Background,
  Scroll,
  Description,
  DescriptionHeader,
  DescriptionTitle,
  Count,
  CountMinus,
  CountTotal,
  CountPlus,
  CountIconMinus,
  CountIconPlus,
  Favorite,
  Info,
  Size,
  Sizes,
  SizeText,
  Options,
  OptionsHeader,
  OptionsTitle,
  SubTitle,
  OptionInfo,
  OptionInfoText,
  Option,
  OptionText,
} from "./styles";
import pizza from "../../assets/pizza3.png";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Title } from "../../components/Title";
import { Price } from "../../components/CardProduct/styles";

export function Details() {
  const [totalItems, setTotalItems] = useState(0);
  const [sizeSelected, setSizeSelected] = useState("ch");
  const [optionSelected, setOptionSelected] = useState("");

  return (
    <Container>
      <StatusBar translucent style="light" backgroundColor="" />
      <Background source={pizza} resizeMode="cover">
        {/* <Text>ds</Text> */}
      </Background>

      <Description>
        <Scroll>
          <Favorite>
            <Feather name="heart" size={18} color="#ffffff" />
          </Favorite>

          <DescriptionHeader>
            <DescriptionTitle>
              <Title>Pizza Cantos</Title>
              <Price>$140.00</Price>
            </DescriptionTitle>
            <Count>
              <CountMinus
                onPress={() =>
                  setTotalItems((prevState: any) => {
                    if (prevState != 0) {
                      return prevState - 1;
                    }
                    return 0;
                  })
                }
              >
                <CountIconMinus name="minus" />
              </CountMinus>

              <CountTotal>{totalItems}</CountTotal>
              <CountPlus
                onPress={() => setTotalItems((prevState) => prevState + 1)}
              >
                <CountIconPlus name="plus" />
              </CountPlus>
            </Count>
          </DescriptionHeader>

          <Info>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero
          </Info>

          <Title>Elige tamaño</Title>

          <Sizes>
            <Size
              seletecd={sizeSelected === "ch"}
              onPress={() => setSizeSelected("ch")}
            >
              <SizeText seletecd={sizeSelected === "ch"}>CH</SizeText>
            </Size>
            <Size
              seletecd={sizeSelected === "md"}
              onPress={() => setSizeSelected("md")}
            >
              <SizeText seletecd={sizeSelected === "md"}>MD</SizeText>
            </Size>
            <Size
              seletecd={sizeSelected === "gd"}
              onPress={() => setSizeSelected("gd")}
            >
              <SizeText seletecd={sizeSelected === "gd"}>GD</SizeText>
            </Size>
            <Size
              seletecd={sizeSelected === "fm"}
              onPress={() => setSizeSelected("fm")}
            >
              <SizeText seletecd={sizeSelected === "fm"}>FM</SizeText>
            </Size>
          </Sizes>

          <Options>
            <OptionsHeader>
              <OptionsTitle>
                <Title>Elige complemento</Title>
                <SubTitle>Selecciona hasta dos opciones</SubTitle>
              </OptionsTitle>
              <OptionInfo>
                <OptionInfoText>Obrigatório</OptionInfoText>
              </OptionInfo>
            </OptionsHeader>

            <Option onPress={() => setOptionSelected("1")}>
              <OptionText>Opcion 1</OptionText>
              <Feather
                name={optionSelected === "1" ? "check-circle" : "circle"}
                size={18}
                color={optionSelected === "1" ? "#C3D61B" : "#92A3C5"}
              />
            </Option>
            <Option onPress={() => setOptionSelected("2")}>
              <OptionText>Opcion 2</OptionText>
              <Feather
                name={optionSelected === "2" ? "check-circle" : "circle"}
                size={18}
                color={optionSelected === "2" ? "#C3D61B" : "#92A3C5"}
              />
            </Option>
          </Options>
        </Scroll>
      </Description>
    </Container>
  );
}
