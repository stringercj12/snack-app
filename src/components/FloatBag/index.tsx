import React from "react";
import {
  Container,
  Bag,
  TotalItems,
  TotalText,
  Action,
  ActionText,
  TotalValue,
  TotalValueText,
} from "./styles";

export function FloatBag() {
  return (
    <Container>
      <Bag>
        <TotalItems>
          <TotalText>3</TotalText>
        </TotalItems>
        <Action>
          <ActionText>My canastra</ActionText>
        </Action>
        <TotalValue>
          <TotalValueText>$150,00</TotalValueText>
        </TotalValue>
      </Bag>
    </Container>
  );
}
