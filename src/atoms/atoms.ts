import { atom, selector } from "recoil";

export const totalStringState = atom<string>({
  key: "totalStringState",
  default: "",
});

export const dataListState = atom<string[][] | null>({
  key: "dataListState",
  default: null,
});

export const isSearchdState = atom<boolean>({
  key: "isSearchdState",
  default: false,
});

export const filterKeywordState = atom({
  key: "filterKeywordState",
  default: "",
});

export const filteredListState = selector({
  key: "filteredListState",
  get: ({ get }) => {
    const filterKeyword = get(filterKeywordState);
    const list = get(dataListState);

    const userIdKeyA = "customer_user_id";
    const userIdKeyB = "user_id";
    const eventTimeKey = "event_time";

    // if (list?.[0].indexOf(userIdKeyA) === -1) {
    //   alert(`${userIdKeyA} 컬럼이 존재하지 않습니다.}`);
    // }

    // if (list?.[0].indexOf(eventTimeKey) === -1) {
    //   alert(`${eventTimeKey} 컬럼이 존재하지 않습니다.}`);
    // }

    const userIdIndex =
      list?.[1].indexOf(userIdKeyA) ?? list?.[1].indexOf(userIdKeyB);
    const eventTimeIndex = list?.[1].indexOf(eventTimeKey);

    if (filterKeyword.length === 0) return list;

    const filtered = list?.filter((item, index) => {
      if (index === 1) return true; // 헤더 컬럼만 따로 처리
      return item[userIdIndex ?? 61] === filterKeyword;
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
