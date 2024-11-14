import { createEvent, createStore } from 'effector'


const setLocation = createEvent<string>();
const $location = createStore('welcome').on(
    setLocation, (curPath, newPath) => {
        return newPath;
    }
)

const locationStore = {
    setLocation: setLocation,
    location: $location,
};

export default locationStore;