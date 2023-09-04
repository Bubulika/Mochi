import logo from "../assets/მოჩიკო-02.jpg"
import styled from "styled-components";
import georgia from "../assets/georgia.png"
import english from "../assets/united-kingdom.png"

function Header ({isEnglish,setIsEnglish}){
    
    return(
        <MainDiv>
            <Logo src={logo} alt="mochiko"/>
          <MenuText>Menu</MenuText>
          <Language src={isEnglish ? georgia : english } alt="language" onClick={()=>setIsEnglish(!isEnglish)}/>
        </MainDiv>
    )

}

export default Header

const Language=styled.img`
    width:30px;
    height:30px;
    margin-right:15px;
`
const MainDiv=styled.div`
    height:75px;
    width:100%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const Logo=styled.img`
    width:auto;
    height:75px;
    margin-left:6px;
`

const MenuText=styled.h1`
    font-size:35px;
    color:black;
    font-family: 'Sriracha'; 
    font-weight:400;
`