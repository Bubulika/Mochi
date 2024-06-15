import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 90%;
  border-radius: 50px;
  border: 2px solid white;
  display: flex;
  overflow: hidden;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: ${({ isIcecream }) =>
    isIcecream ? "purple" : "transparent"};
  color: #fff;
  border-radius: ${({ isIcecream }) => (isIcecream ? "50px" : "0px")};

  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Sriracha";
  font-weight: 400;
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const ButtonComponent = ({ isEnglish, isIcecream, setIsIcecream }) => {
  const handleClick = (type) => {
    type === "icecream" ? setIsIcecream(true) : setIsIcecream(false);
  };

  return (
    <MainDiv>
      <ButtonContainer>
        <Button isIcecream={isIcecream} onClick={() => handleClick("icecream")}>
          {isEnglish ? "Mochi with ice-cream" : "ნაყინის შიგთავსით"}
        </Button>
        <Button isIcecream={!isIcecream} onClick={() => handleClick("cream")}>
          {isEnglish ? "Mochi with cream" : "კრემის შიგთავსით"}
        </Button>
      </ButtonContainer>
    </MainDiv>
  );
};

export default ButtonComponent;
