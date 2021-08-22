import styled from 'styled-components/native';


export const Wrapper = styled.View`
height: 80%;
padding: 10px;
`;


export const TitleInput = styled.TextInput`
border: 1px solid black;
`;


export const ButtonTitle = styled.Text<{  color ?:string }>`
  color: ${({ color }) => color || 'black'};
`;


export const ButtonContainer = styled.TouchableOpacity
<{  backgroundColor?:string, width:number,height:number }>`
  margin: 20px 5px 0px 5px;
  width: ${({ width }) => width || '40'}px;
  height: ${({ height }) => height || '40'}px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const ButtonWrapper = styled.View<{ margin?:number }>`
flex-direction: row;
justify-content: center;
align-items: center;
margin: ${({ margin }) => margin || '20'}px 0px;
`

export const ItemWrapper = styled.View`
    flex: 1;
    justify-content: center;
    padding: 20px;
`


export const SearchWrapper = styled.View`
    flex-direction: row;
`;

export const SearchButton = styled.TouchableOpacity`
    height: 40px;
    width: 80px;
    backgroundColor: yellow;
    border-radius : 10px;
    justify-content: center;
    align-items: center;
`;


export const SearchInput = styled.TextInput`
border: 1px solid black;
flex: 1;
border-radius : 10px;
padding: 10px;
margin-right: 10px;
`;

