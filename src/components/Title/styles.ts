import styled from "styled-components/native";

export const Container = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 20px;
  margin-bottom: 10px;
`;
