import DashBoardCardItem from "./DashBoardCardItem";

interface DashBoardCardListProps {
  filterKeyword: string;
  filteredList: string[][];
}

const DashBoardCardList = ({
  filterKeyword,
  filteredList,
}: DashBoardCardListProps) => {
  // 0: event_time, 1 : event_name, 2 : event_value, 3 : android_id, 4 : idfa, 5 : device_model
  const refinedList = filteredList?.map((subArray) => {
    const targetIndexList = [0, 4, 5, 61, 64, 118];
    const refinedSubArray = subArray.filter((_, index) =>
      targetIndexList.includes(index)
    );
    return refinedSubArray;
  });

  return (
    <div>
      <header>
        <h1>유저아이디 : {filterKeyword}</h1>
      </header>

      <DashBoardCardItem refinedList={refinedList} />
    </div>
  );
};

export default DashBoardCardList;
