import React, {useState} from 'react';
import styled, { ThemeProvider } from "styled-components";
import profile from "./assets/profile.jpg";
import logo from "./assets/google.png";
import menu from "./assets/menu.PNG";
import search from "./assets/search.PNG";
import buttons from "./assets/button.PNG";

const Header = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  height:50px;
  margin-top:3px;

`
const FooterWrapper = styled.div`

display: flex;
flex-direction: column;
align-content:flex-end;
justify-content:flex-start;

`
const Footer1 = styled.div`

margin-top:310px;
color:${props => props.theme.fontColor || 'gray'};
align-content:flex-end;
padding-left:30px;
padding-top:15px;
padding-bottom:15px;
font-size:15px;
background-color:${props => props.theme.footColor};

`

const Footer2 = styled.div`
color:${props => props.theme.fontColor || 'gray'};
border-top:1px solid lightgray;
padding-left:30px;
padding-top:15px;
padding-bottom:15px;
font-size:14px;
background-color:${props => props.theme.footColor};

`

const Center = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin-top:10%;

`
const Row = styled.div`
display: flex;
flex-direction: row;
align-items:center;

`

const Input = styled.div`
display:flex;
justify-content:space-around;
background-color:white;
margin-top:15px;
width:550px;
height:40px;
border-radius:30px;
border:1px solid lightgray;
outline:none;

`
const InputConsol = styled.input`

border:1px solid white;
width:400px;
outline:none;

`

const Button = styled.button`
margin-right:10px;
background: ${props => props.theme.bgcolor || 'white'};
color:${props => props.theme.fontcolor || 'black'};;
border: none;
outline:none;

`

const GrayButton = styled.button`
margin-right:10px;
background: ${props => props.theme.default || '#F8F9F9;'};
color:${props => props.theme.fontcolor || 'black'};
border: none;
outline:none;
margin-top:30px;
height:35px;
padding-left:20px;
padding-right:20px;
border-radius:10px;

`

const Image = styled.button`
margin-right:10px;
margin-top:10px;
background:  ${props => props.theme.bgcolor || 'white'};
border: none;
outline:none;

`

const Logo = styled.image`
margin-right:10px;
margin-top:10px;
background:${props => props.theme.bgcolor || 'black'};
border: none;
outline:none;

`

const Wrapper = styled.div`
background-color: ${props => props.theme.bgcolor};
display: flex;
flex-direction: column;
min-height:100vh;
margin:0;


`

function App() {
   const [themeMode, setThemeMode] = useState('light');
   const dark = {
     titleColor: '#121212',
     footColor: '#242424',
     bgColor: 'black',
     fontColor: 'white',
     default: 'black'
      };
   const light = {
    titleColor: '#b8b8b8',
    footColor: '#F2F2F2',
    bgColor: 'white'
  }
     const theme = themeMode === 'light' ? light : dark;
     const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    console.log(themeMode);
     
  }

  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      <Header>
        <Button>Gmail</Button>
        <Button>이미지</Button>
        <Button>...</Button>
        <Image><img src={profile} style={{ borderRadius: "50%" }} /></Image>
        <button style={{ height: "20px", width: "40px", marginTop: "15px", marginRight: "20px"}} onClick={toggleTheme} >click!</button>
      </Header>
      <Center>
        <Logo><img src={logo} /></Logo>
        <Input >
          <img src={search} style={{ margin: "7px" }} />
          <InputConsol />
          <img src={buttons} style={{ height: "100%", borderRadius: "50%", marginRight: "10px" }} />
        </Input>
        <Row>
          <GrayButton>Google 검색</GrayButton>
          <GrayButton>I'm Feeling Lucky </GrayButton>
        </Row>
        <div style={{ marginTop: "20px" }}>
        </div>

      </Center>
      <FooterWrapper>
        <Footer1>대한민국</Footer1>
        <Footer2>
          <a href="https://about.google/?utm_source=google-KR&utm_medium=referral&utm_campaign=hp-footer&fg=1" style={{ marginRight: "23px" }}>Google 정보</a>
          <a href="https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" style={{ marginRight: "23px" }}>  광고</a>
          <a href="https://www.google.com/intl/ko_kr/business/" style={{ marginRight: "23px" }}> 비즈니스 </a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1" style={{ marginRight: "23px" }}> 검색의 원리</a>
          <a href="https://policies.google.com/u/1/privacy?hl=ko&fg=1" style={{ marginLeft: "78rem", marginRight: "23px" }}>개인정보처리방침</a>
          <a href="https://policies.google.com/u/1/terms?hl=ko&fg=1" style={{ marginRight: "23px" }}>약관 </a>
          <a style={{ marginRight: "23px" }}>설정 </a>
        </Footer2></FooterWrapper>

    </Wrapper>
    </ThemeProvider>
  );
}

export default App;