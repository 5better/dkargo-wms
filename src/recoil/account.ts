import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "rememberId",
  storage: localStorage,
});

export const filterState = atom({
  key: "id",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
