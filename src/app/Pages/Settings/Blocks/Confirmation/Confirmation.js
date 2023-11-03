import React from "react";
import { AppContext } from "../../../../Provider/AppProvider";
import ConfirmationButton from "./Components/ConfirmationButton";



export default function Confirmation() {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => <ConfirmationButton onConfirm={confirmFavorites}/>}
        </AppContext.Consumer>
    )
}