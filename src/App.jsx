import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Card from "./components/Card";
import { MochikoProductGeo, MochikoProductEng } from "./Data";
import { useState } from "react";
import Footer from "./components/Footer";
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
          ? MochikoProductEng.map((item) => <Card data={item} />)
          : MochikoProductGeo.map((item) => <Card data={item} />)}
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
  margin-top: 30px;
`;
