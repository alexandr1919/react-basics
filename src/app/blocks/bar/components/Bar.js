import { styled } from "styled-components"


const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px 2fr auto auto auto;
    align-items: center;
    > * {
        margin-right: 16px;
    }
`

export default Bar