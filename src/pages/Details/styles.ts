import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface SizeProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  height: 340px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 25,
  },
})``;

export const Description = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 2;
`;

export const DescriptionHeader = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DescriptionTitle = styled.View``;

export const Favorite = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.alert};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50px;
  right: 30px;
`;

export const Count = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

export const CountMinus = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const CountTotal = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
  width: 32px;
  text-align: center;
`;

export const CountPlus = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const CountIconMinus = styled(Feather)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CountIconPlus = styled(Feather)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  margin: 10px 0px;
`;

export const Sizes = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Size = styled.TouchableOpacity<SizeProps>`
  width: 56px;
  height: 28px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, seletecd }) =>
    seletecd ? theme.colors.primary : theme.colors.shape};

  border: 1px solid
    ${({ theme, seletecd }) =>
      seletecd ? theme.colors.primary : theme.colors.sub_title};
`;

export const SizeText = styled.Text<SizeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 13px;

  color: ${({ theme, seletecd }) =>
    seletecd ? theme.colors.shape : theme.colors.text};
`;

export const Options = styled.View``;

export const OptionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsTitle = styled.View``;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`;

export const OptionInfo = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  border-radius: 4px;
`;

export const OptionInfoText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 12px;
`;

export const Option = styled.TouchableOpacity`
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background_light};
  margin-top: 10px;
  padding: 0px 10px;
`;

export const OptionText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
`;
