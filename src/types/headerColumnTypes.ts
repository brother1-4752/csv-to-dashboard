import {
  amplitudeColumnList,
  appsFlyerColumnList,
} from "../constants/headerColumnLists";

type AppsFlyerRowType = {
  [key in (typeof appsFlyerColumnList)[number]]: string;
};
type AmplitudeRowType = {
  [key in (typeof amplitudeColumnList)[number]]: string;
};

export type RowType = AppsFlyerRowType | AmplitudeRowType;
