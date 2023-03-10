import { atom, selector } from "recoil";

export const countState = atom({
    key: "countState",
    default: 0
});

export const dollarCountState = selector({
    key: "dollarCountState",
    get: ({ get }) => {
        const count = get(countState);
        return `${count}$`;
    }
});

export const fixedCountState = selector({
    key: "FixedCountState",
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