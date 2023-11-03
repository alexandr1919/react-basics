/* eslint-disable import/no-anonymous-default-export */
import ThemeSwtich from "../../components/ThemeSwtich"
import NavLinkElem from "./components/NavLinkElem"
import Bar from "./components/Bar"
import Logo from "./components/Logo"
import { toProperCase } from "../../utils/helpers"
import { AppContext } from "../../Provider/AppProvider"

function ControlButton({name, active}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
                <NavLinkElem active={page === name} onClick={() => setPage(name)}>
                    {toProperCase(name)}
                </NavLinkElem>
            )}
        </AppContext.Consumer>
    )
}

export default function() {
    return (
        <Bar>
            <Logo>CryptoDash</Logo>
            <div/>
                <ControlButton active="true" name="dashboard"/>
                <ControlButton name="settings"/>
            <ThemeSwtich/>
        </Bar>
    )
}