import { useReducer, useState } from "react";
import Toggle from "./Toggle";


const DEFAULT_VALUE = false;

const RenderButton = function({}) {
    const [isDarktheme, setTheme] = useState(DEFAULT_VALUE);
    console.log('ThemeSwitch.js isDarkTheme = ',isDarktheme)
    // const [isDarkThemeValue, dispatch] = useReducer(darkthemeReducer, DEFAULT_VALUE);
    const onThemeSwitch = (isDarktheme) => {
        setTheme(!isDarktheme);
        // dispatch({
        //     type: isDark
        //   })
    };
    return (
        <Toggle onToggle={onThemeSwitch}/>
    )
}

export default RenderButton;