import styled from "styled-components";
import PropTypes from "prop-types";
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

Card.propTypes = {
  data: PropTypes.object,
};

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
  padding: 7px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: "Sriracha";
`;
const Ingredients = styled.h3`
  font-size: 12px;
  font-weight: 700;
  opacity: 0.85;
  font-family: "Sriracha";
`;
const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin: 7px;
`;
const Price = styled.h3`
  font-size: 20px;
  font-weight: 700;
  font-family: "Sriracha";
`;
