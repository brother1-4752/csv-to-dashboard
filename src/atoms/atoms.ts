import { atom, selector } from "recoil";

export const totalCsvTextState = atom<string | null>({
  key: "totalCsvTextState",
  default: null,
});

export const csvDataListState = atom<string[][] | null>({
  key: "csvDataListState",
  default: null,
});

export const userIdFilterState = atom({
  key: "csvDataListFilterState",
  default: "",
});

export const filteredcsvDataListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(userIdFilterState);
    const list = get(csvDataListState);
    const userIdKey = "customer_user_id";
    const eventTimeKey = "event_time";

    if (list?.[0].indexOf(userIdKey) === -1) {
      alert(`${userIdKey} 컬럼이 존재하지 않습니다.}`);
    }

    if (list?.[0].indexOf(eventTimeKey) === -1) {
      alert(`${eventTimeKey} 컬럼이 존재하지 않습니다.}`);
    }

    const userIdIndex = list?.[0].indexOf(userIdKey);
    const eventTimeIndex = list?.[0].indexOf(eventTimeKey);

    if (filter.length === 0) return list;

    const filteredByUserId = list?.filter((item, index) => {
      if (index === 0) return true;
      return item[userIdIndex ?? 61] === filter;
    });

    const filteredDataListByEventTime = filteredByUserId?.sort((a, b) => {
      const timeA = new Date(a[eventTimeIndex ?? 3]).getTime();
      const timeB = new Date(b[eventTimeIndex ?? 3]).getTime();
      return timeB - timeA;
    });

    function moveElementToStart(arr: string[][], indexToMove: number) {
      arr.forEach((subArray) => {
        const elementToMove = subArray[indexToMove];
        const index = subArray.indexOf(elementToMove);
        if (index !== -1) {
          subArray.splice(index, 1); // 해당 값 삭제
          subArray.unshift(elementToMove); // 해당 값 맨 앞으로 추가
        }
      });
    }
    moveElementToStart(filteredDataListByEventTime as string[][], 3);

    return filteredDataListByEventTime;
  },
});
