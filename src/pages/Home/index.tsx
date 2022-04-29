import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  Avatar,
  AvatarContainer,
  Container,
  Header,
  HeaderTop,
  Row,
  Logo,
  AddressContainer,
  AddressText,
  AddressTextSelected,
  SearchContainer,
  Input,
  SearchIcon,
  Search,
  CategoryHeader,
  CategoryHeaderTitle,
  CategoryHeaderSubTitle,
  CategoryList,
  Category,
  CategoryImage,
  CategoryName,
  Scroll,
  CardProductContainer,
} from "./styles";

import logo from "../../assets/logo.png";
import pizza from "../../assets/pizza.png";
import { FlatList, StyleSheet } from "react-native";
import { useTheme } from "styled-components";
import { Title } from "../../components/Title";
import { CardProduct } from "../../components/CardProduct";

export function Home() {
  const [categorySelected, setCategorySelected] = useState("0");

  const theme = useTheme();
  return (
    <Container>
      <Header>
        <HeaderTop>
          <Row>
            <AddressContainer>
              <Logo source={logo} />
              <AddressText>Entrega en: {""}</AddressText>
              <AddressTextSelected>
                Peru 2
                <Feather name="chevron-down" size={15} />
              </AddressTextSelected>
            </AddressContainer>

            <AvatarContainer>
              <Avatar source={{ uri: "https://github.com/stringercj12.png" }} />
            </AvatarContainer>
          </Row>
          <Search>
            <SearchContainer>
              <SearchIcon>
                <Feather
                  name="search"
                  size={15}
                  color={theme.colors.sub_title}
                />
              </SearchIcon>
              <Input
                placeholder="Que quieres comer hoy?"
                placeholderTextColor={theme.colors.sub_title}
              />
            </SearchContainer>
          </Search>
          <CategoryHeader>
            <CategoryHeaderTitle>Categoria</CategoryHeaderTitle>
            <CategoryHeaderSubTitle>Ofertas</CategoryHeaderSubTitle>
          </CategoryHeader>
        </HeaderTop>
        <CategoryList
          data={["0", "1", "2", "3", "4", "5", "6", "8", "9", "10", "11", "12"]}
          keyExtractor={(item: string) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Category
                seletecd={categorySelected === item}
                onPress={() => setCategorySelected(item)}
              >
                <CategoryImage source={pizza} />
                <CategoryName seletecd={categorySelected === item}>
                  Pizzas
                </CategoryName>
              </Category>
            );
          }}
        />
      </Header>

      <Scroll>
        <Title key="Pizzas-1">Pizzas</Title>

        <CardProductContainer key="Pizzas-1.1">
          <CardProduct />
        </CardProductContainer>
        <CardProductContainer key="Pizzas-1.2">
          <CardProduct />
        </CardProductContainer>

        <Title key="Hamburguesas-2">Hamburguesas</Title>

        <CardProductContainer key="Hamburguesas-1.1">
          <CardProduct />
        </CardProductContainer>
        <CardProductContainer key="Hamburguesas-1.2">
          <CardProduct />
        </CardProductContainer>
      </Scroll>
    </Container>
  );
}
