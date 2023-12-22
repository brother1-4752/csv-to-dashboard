import { useState } from "react";

interface DashBoardCardListProps {
  filterKeyword: string;
  filteredList: string[][];
}

const DashBoardCardList = ({
  filterKeyword,
  filteredList,
}: DashBoardCardListProps) => {
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  console.log(filteredList);
  // 0, 4, 5
  // 61, 62 (android)
  // 64, 65 (idfa,idfv)
  // 119 (device_model) => iPhone 포함 : 64 , samsung 포함 : 61
  


  return (
    <div>
      <header>
        <h1>유저아이디 : {filterKeyword}</h1>

        {filteredList.slice(1).map((row, index) => (
          <div
            key={index}
            style={{
              width: "50%",
              padding: "36px",
              border: "1px solid black",
              gap: "8px",
              display: "flex",
            }}
          >
            <h1 style={{ fontSize: "18px" }}>{row[0]}</h1>
            <p>
              - 이벤트명 : {row[4]}
              <button onClick={() => setOpenDetail((prev) => !prev)}>
                자세히 보기
              </button>
            </p>
            {openDetail && <p>{row[5]}</p>}
          </div>
        ))}
      </header>
    </div>
  );
};

export default DashBoardCardList;
