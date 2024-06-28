import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Card from "./components/Card";
import {
  MochikoProductGeo,
  MochikoProductEng,
  iceCreamEng,
  iceCreamGeo,
} from "./Data";
import { useState } from "react";
import Footer from "./components/Footer";
import IcecreamCard from "./components/IcecreamCard";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

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

      <Div>
        {isEnglish
          ? MochikoProductEng.map((item) => (
              <Card data={item} key={item.name} />
            ))
          : MochikoProductGeo.map((item) => (
              <Card data={item} key={item.name} />
            ))}
      </Div>
      <Title>{isEnglish ? "Ice-cream" : "ნაყინი"}</Title>
      <Div>
        {isEnglish
          ? iceCreamEng.map((item) => (
              <IcecreamCard data={item} key={item.name} />
            ))
          : iceCreamGeo.map((item) => (
              <IcecreamCard data={item} key={item.name} />
            ))}
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

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-family: "Sriracha";
`;
