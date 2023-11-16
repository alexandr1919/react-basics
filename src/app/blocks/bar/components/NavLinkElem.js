import { styled, css } from "styled-components"

const NavLinkElem = styled.a`
    display: block;
    cursor: pointer;
    ${props => props.active && css`
        border-bottom: 1px dashed red;
        color: darkgrey;
       text-shadow: 0px 0px 60px red;
    `}
`

export default NavLinkElem