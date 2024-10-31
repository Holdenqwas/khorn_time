import { createEvent, createStore } from 'effector'

const toggleTheme = createEvent()
const $theme = createStore("light").on(toggleTheme, (curTheme, _) => (curTheme == "light" ? "dark" : "light"))

const themeStore = {
    toggleTheme: toggleTheme,
    theme: $theme
};

export default themeStore;