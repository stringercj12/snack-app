import { FlatList } from "react-native";
import styled from "styled-components/native";

interface CategoryProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 320px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding-top: 50px;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderTop = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 20px;
  height: 20px;
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddressText = styled.Text`
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  margin-left: 10px;
`;

export const AddressTextSelected = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
`;

export const AvatarContainer = styled.View`
  border: 5px ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  width: 49px;
  height: 49px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  width: 42px;
  height: 42px;
`;

export const Search = styled.View``;

export const SearchContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  overflow: hidden;

  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.background};
`;

export const SearchIcon = styled.View`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  flex: 1;
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const CategoryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const CategoryHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 15px;
`;

export const CategoryHeaderSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 15px;
`;

export const CategoryList = styled(
  FlatList as new () => FlatList<string[]>
).attrs({
  contentContainerStyle: {
    paddingLeft: 25,
  },
})``;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 61px;
  height: 77px;
  padding: 10px 8px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.shape};
`;

export const CategoryImage = styled.Image``;

export const CategoryName = styled.Text<CategoryProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;

  color: ${({ theme, selected }) =>
    selected ? theme.colors.shape : theme.colors.sub_title};
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 25,
  },
})``;

export const CardProductContainer = styled.TouchableOpacity`
  margin-bottom: 23px;
`;
