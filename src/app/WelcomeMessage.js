import React from "react";
import { styled, css } from "styled-components";

const StyledSpan = styled.span`
        color: red;
        ${props => true && css`
            font-size: 10px;
        `}
    `

    const SecondSpan = styled(StyledSpan)`
        color: green;
    `
export default function WelcomeMessage() {
    
    return <h1>
    <StyledSpan>
        Welcome component
    </StyledSpan>
    <SecondSpan>
        Second component
    </SecondSpan>
    </h1>
}