import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 10px 16px;
  border-radius: 14px;
`;

export const ContainerImage = styled.View`
  position: relative;
  width: 68px;
  height: 69px;
  margin-right: 10px;
`;

export const Discount = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 27px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.alert};
  z-index: 2;
`;
export const DiscountText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 10px;
`;

export const Image = styled.Image`
  width: 68px;
  height: 69px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 20px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 20px;
`;

export const BeforePrice = styled.Text`
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;
`;

export const ButtonCart = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 0;
  right: 0;
`;
