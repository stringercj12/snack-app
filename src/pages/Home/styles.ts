import styled, { css } from "styled-components/native";

interface CategoryProps {
  selected: boolean;
}

export const Container = styled.SafeAreaView`
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

export const Logo = styled.Image``;

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

export const AvatarContainer = styled.View``;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 3px ${({ theme }) => theme.colors.primary};
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

export const CategoryList = styled.FlatList.attrs({
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

  background-color: ${({ theme, seletecd }) =>
    seletecd ? theme.colors.primary : theme.colors.shape};
`;

export const CategoryImage = styled.Image``;

export const CategoryName = styled.Text<CategoryProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;

  color: ${({ theme, seletecd }) =>
    seletecd ? theme.colors.shape : theme.colors.sub_title};
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 25,
  },
})``;

export const CardProductContainer = styled.View`
  margin-bottom: 23px;
`;
