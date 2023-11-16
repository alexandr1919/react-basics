import styled from "styled-components";

const ConfirmationButtonStyled = styled.button`
    background-color: red;
`

export default  function ConfirmationButton({onConfirm}) {
    return (
        <ConfirmationButtonStyled onClick={onConfirm}>Confirm</ConfirmationButtonStyled>
    )
}