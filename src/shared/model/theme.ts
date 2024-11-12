import { theme } from 'antd';
import { createEvent, createStore } from 'effector'

const toggleTheme = createEvent()
const $theme = createStore(theme.defaultAlgorithm).on(
    toggleTheme, (curTheme, _) => (
        curTheme == theme.defaultAlgorithm ? theme.darkAlgorithm : theme.defaultAlgorithm))

const themeStore = {
    toggleTheme: toggleTheme,
    theme: $theme
};

export default themeStore;