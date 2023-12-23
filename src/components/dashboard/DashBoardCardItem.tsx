import { Fragment } from "react";

interface DashBoardCardItemProps {
  refinedList: string[][];
}

const DashBoardCardItem = ({ refinedList }: DashBoardCardItemProps) => {
  return (
    <Fragment>
      {refinedList.map((subArray, index) => {
        if (index === 0) return;
        return (
          <div
            key={index}
            style={{ border: "1px solid black", padding: "12px" }}
          >
            {subArray.map((row, index) => (
              <div key={index}>
                {refinedList[0][index]} : {row}
              </div>
            ))}
          </div>
        );
      })}
    </Fragment>
  );
};

export default DashBoardCardItem;
