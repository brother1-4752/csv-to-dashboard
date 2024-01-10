import { atom } from "recoil";

export type FilterType = "userId" | "all";

export const filterKeywordState = atom({
  key: "filterKeywordState",
  default: "",
});

export const filterTypeState = atom<FilterType>({
  key: "filterTypeState",
  default: "userId" as FilterType,
});
