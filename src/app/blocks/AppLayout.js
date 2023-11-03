import { styled, css } from "styled-components";
import { darkthemeBackgroundColor, darkthemeTextColor } from '../utils/variables';


export default styled.div`
    padding: 40px;
    background-color: #d8dbe0;
    height: 100vh;
    ${props => props.darktheme && css`
        background: ${darkthemeBackgroundColor};
        color: ${darkthemeTextColor};
    `}
`