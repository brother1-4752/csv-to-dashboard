import { atom, selector } from "recoil";

export type FilterType = "userId" | "eventName" | "all";

export const totalStringState = atom<string | null>({
  key: "totalStringState",
  default: null,
});

export const dataListState = atom<string[][] | null>({
  key: "dataListState",
  default: null,
});

export const filterKeywordState = atom({
  key: "filterKeywordState",
  default: "",
});

export const filterTypeState = atom<FilterType>({
  key: "filterTypeState",
  default: "userId" as FilterType,
});

export const filteredListState = selector({
  key: "filteredListState",
  get: ({ get }) => {
    const filterKeyword = get(filterKeywordState);
    const filterType = get(filterTypeState);
    const list = get(dataListState);

    // 모든 데이터 필터링 없이 보여주기
    if (filterType === "all") return list;

    const userIdKeyA = "customer_user_id";
    const eventNameKey = "event_name";
    const eventTimeKey = "event_time";

    if (list?.[0].indexOf(userIdKeyA) === -1) {
      alert(`${userIdKeyA} 컬럼이 존재하지 않습니다.}`);
    }

    if (list?.[0].indexOf(eventNameKey) === -1) {
      alert(`${eventNameKey} 컬럼이 존재하지 않습니다.}`);
    }

    if (list?.[0].indexOf(eventTimeKey) === -1) {
      alert(`${eventTimeKey} 컬럼이 존재하지 않습니다.}`);
    }

    const userIdIndex = list?.[0].indexOf(userIdKeyA);
    const eventNameIndex = list?.[0].indexOf(eventNameKey);
    const eventTimeIndex = list?.[0].indexOf(eventTimeKey);

    if (filterKeyword.length === 0) return list;

    const filtered = list?.filter((item, index) => {
      if (index === 0) return true;
      return (
        item[
          filterType === "userId"
            ? userIdIndex ?? 61
            : filterType === "eventName"
            ? eventNameIndex ?? 4
            : -1 // -1이면 에러인데, 어떻게 나타냄?
        ] === filterKeyword
      );
    });

    const filteredDataListByEventTime = filtered?.sort((a, b) => {
      const timeA = new Date(a[eventTimeIndex ?? 3]).getTime();
      const timeB = new Date(b[eventTimeIndex ?? 3]).getTime();
      return timeB - timeA;
    });

    const clonedDataList = filteredDataListByEventTime?.map((subArray) => [
      ...subArray,
    ]);

    clonedDataList?.forEach((subArray) => {
      const elementToMove = subArray[3];
      const index = subArray.indexOf(elementToMove);

      subArray.splice(61, 1);

      if (index !== -1) {
        subArray.splice(index, 1);
        subArray.unshift(elementToMove);
      }
    });

    return clonedDataList;
  },
});
