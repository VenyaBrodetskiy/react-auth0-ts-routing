import { atom, selector } from "recoil";

const countState = atom({
    key: "smartCountState",
    default: 0
});

export const smartCountState = selector({
    key: "smartCountStateSelector",
    get: ({ get }) => {
        const count = get(countState);
        return count;
    },
    set: ({ set }, newValue) => {
        if (newValue < 0 || newValue > 10) {
            return;
        }
        set(countState, newValue);
    }
})