import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    //get함수를 사용해서 atom의 값을 가져올 수 있음.
    return minutes / 60;
    // selector를 활용해서 state를 가져오고 output 수정.    
  },
  set:({set}, newValue) => {
    // set은 state를 set하는 것을 도와주는 속성.(atom수정하도록 도와줌)
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
    // 1. 수정하고 싶은 atom 2. 새로운 값. 
  },
});