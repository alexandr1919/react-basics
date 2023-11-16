import { useState } from "react";
import { styled } from "styled-components";
import { yellowColor, darkthemeBackgroundColor } from '../utils/variables';


const toggleSize = `32`;
const Wrapper = styled.div`
    display: flex;
`
const ToggleCheckbox = styled.input.attrs({type: 'checkbox', id: 'toggle' })`
    appearance: none;
    margin: 0;
    &:checked + label {
        background: transparent;
    }
    &:checked + label:after {
        display: none;
    }
    &:checked + label:before {
        transform: translateX(calc(100% - 1px));
        background: ${yellowColor};
    }
`

const ToggleLabel = styled.label.attrs({htmlFor: 'toggle'})`
    display: block;
    position: relative;
    top: 0;
    width: ${toggleSize * 2}px;
    height: ${toggleSize}px;
    border: 1px solid ${darkthemeBackgroundColor};
    border-radius: ${toggleSize / 2}px;
    cursor: pointer;
    background: ${darkthemeBackgroundColor};
    overflow: hidden;
    &:before {
        display: block;
        content: "";
        width: ${toggleSize}px;
        height: ${toggleSize}px;
        background: ${yellowColor};
        border-radius: 100%;
        transform: translateX(0);
        cursor: pointer;
        transition: all 0.1s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }
    &:after {
        position: absolute;
        top: -6px;
        left: -12px;
        display: block;
        content: "";
        width: ${toggleSize}px;
        height: ${toggleSize}px;
        background: ${darkthemeBackgroundColor};
        border-radius: 100%;
        transform: translateX(20px);
        cursor: pointer;
    }
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);

`

const Toggle = ({onToggle}) => {
    const [left, setLeft] = useState(true);
    const toggle = (e) => {
        setLeft(!left);
        onToggle(!left);
    };
    return(
        <Wrapper>
            <ToggleCheckbox onChange={toggle}/>
            <ToggleLabel/>
        </Wrapper>
    )
}


export default Toggle;