import { theme } from 'antd';
import { createEvent, createStore } from 'effector'

const getTheme = () => {
    const value = localStorage.getItem("curTheme");
    if (value == "dark") return theme.darkAlgorithm;
    else return theme.defaultAlgorithm;
}

const setTheme = (newValue: "light" | "dark") => {
    localStorage.setItem("curTheme", newValue);
}

const toggleTheme = createEvent()
const $theme = createStore(getTheme()).on(
    toggleTheme, (curTheme, _) => {
        if (curTheme == theme.defaultAlgorithm) {
            return theme.darkAlgorithm;
        }
        else {
            return theme.defaultAlgorithm;
        }
    }
)

const $isLight = $theme.map((value) => {
    const newVal = value == theme.defaultAlgorithm;
    newVal ? setTheme("light") : setTheme("dark");
    return newVal;
})

const themeStore = {
    toggleTheme: toggleTheme,
    theme: $theme,
    isLight: $isLight,
};

export default themeStore;