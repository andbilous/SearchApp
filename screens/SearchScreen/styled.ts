import styled from 'styled-components/native';


export const Wrapper = styled.View`
border: 1px solid black;
height: 80%;
margin-top: 100px;
`;


export const SearchWrapper = styled.View`
    flex-direction: row;
`;

export const SearchButton = styled.TouchableOpacity`
    height: 40px;
    width: 80px;
    backgroundColor: yellow;
    border-radius : 10px;
`

export const ContentModalButton = styled.TouchableOpacity`
height: 40px;
width: 80px;
backgroundColor: red;
border-radius : 10px;
`

export const ButtonTitle = styled.Text``;



export const SearchInput = styled.TextInput`
border: 1px solid black;
flex: 1;
`;
