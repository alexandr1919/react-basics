import React from "react";
import { styled, css } from "styled-components";
import { AppContext } from "../../../Provider/AppProvider";

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
    return (
        <AppContext.Consumer>
            {({firstVisit}) => firstVisit ? 'first visit' : 'not first visit'}
        </AppContext.Consumer>
    )
}