import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Card from "./components/Card";
import { MochikoProductGeo, MochikoProductEng } from "./Data";
import { useState } from "react";
import Footer from "./components/Footer";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isIcecream, setIsIcecream] = useState(true);
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@900&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <ButtonComponent
        isEnglish={isEnglish}
        isIcecream={isIcecream}
        setIsIcecream={setIsIcecream}
      />
      <Div>
        {isEnglish
          ? isIcecream
            ? MochikoProductEng.filter((el) => el.isIcecream === true).map(
                (item) => <Card data={item} key={item.name} />
              )
            : MochikoProductEng.filter((el) => el.isIcecream === false).map(
                (item) => <Card data={item} key={item.name} />
              )
          : isIcecream
          ? MochikoProductGeo.filter((el) => el.isIcecream === true).map(
              (item) => <Card data={item} key={item.name} />
            )
          : MochikoProductGeo.filter((el) => el.isIcecream === false).map(
              (item) => <Card data={item} key={item.name} />
            )}
      </Div>
      <Footer isEnglish={isEnglish} />
    </>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
