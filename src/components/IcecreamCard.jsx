import styled from "styled-components";
import PropTypes from "prop-types";

function IcecreamCard({ data }) {
  return (
    <MainDiv>
      <Photo src={data.img} />
      <DetailDiv>
        <Title>{data.name}</Title>
        <Price>{data.price}</Price>
      </DetailDiv>
    </MainDiv>
  );
}
IcecreamCard.propTypes = {
  data: PropTypes.object,
};

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

export default IcecreamCard;
