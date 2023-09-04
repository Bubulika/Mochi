import styled from "styled-components";
function Card({ data }) {
  return (
    <MainDiv>
      <Photo src={data.img} />
      <DetailDiv>
        <Title>{data.name}</Title>
        <Ingredients>{data.ingredients}</Ingredients>
        <Price>{data.price}</Price>
      </DetailDiv>
    </MainDiv>
  );
}

export default Card;

const MainDiv = styled.div`
  width: 87%;
  background-color: white;
  display: flex;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 5px 5px 10px gray;
`;
const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:7px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const Ingredients = styled.h3`
  font-size: 12px;
  font-weight: 700;
  opacity:0.85;
`;
const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin:7px;
`;
const Price = styled.h3`
  font-size: 20px;
  font-weight: 700;
  
`;
