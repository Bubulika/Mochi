import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
};

body{  
    
    background: linear-gradient(to bottom,rgba(223, 159, 247, 0.8) 23%,rgba(255, 215, 185, 0.91) 93%);
}
`;

export default GlobalStyles;
