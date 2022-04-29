import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color:  ${({ theme }) => theme.colors.background};
  padding: 0px 25px;
  margin-bottom: 20px;
`;

export const Bag = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 57px;
  width: 357px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;

export const TotalItems = styled.View`
  height: 33px;
  width: 33px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const TotalText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 20px;
`;

export const Action = styled.View``;

export const ActionText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
`;

export const TotalValue = styled.View``;

export const TotalValueText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
`;
