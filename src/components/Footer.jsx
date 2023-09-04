import styled from "styled-components";
import insta from "../assets/icons8-instagram-48.png";
import facebook from "../assets/icons8-facebook-48.png";
import tiktok from "../assets/icons8-tiktok-48.png";
function Footer() {
  return (
    <MainDiv>
        <Text>Follow us</Text>
      <Div>
        <Facebook
          href="https://www.facebook.com/profile.php?id=100092645889060"
          target="blank"
        />
        <Instagram
          href="https://www.instagram.com/mochiko__mochiko/"
          target="blank"
        />
        <Tiktok
          href="https://www.tiktok.com/@mochiko2023?_t=8ecdoN5DxCc&_r=1&fbclid=IwAR2OtUYXabFvZmEdzrZgAiZlw7xreEcaChMMk2tUvUnq2CWiepoVi2oRMzQ"
          target="blank"
        />
      </Div>
    </MainDiv>
  );
}

export default Footer;
const Text =styled.h1`
font-family: 'Sriracha'; 
    font-weight:400;
    margin-top:15px;
    font-size:25px;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:3px;
  
`;

const MainDiv = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  gap:15px;
  align-items:center;
  flex-direction:column
`;

const Facebook = styled.a`
  width: 48px;
  height: 48px;
  background-image: url(${facebook});
`;

const Instagram = styled(Facebook)`
  background-image: url(${insta});
`;

const Tiktok = styled(Facebook)`
  background-image: url(${tiktok});
`;
