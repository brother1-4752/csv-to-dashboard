import React, { useState } from "react";

const Dashboard = () => {
  const [isDragging, setDragging] = useState(false);
  const [startCell, setStartCell] = useState<string | null>(null);
  const [endCell, setEndCell] = useState<string | null>(null);

  const handleMouseDown = (cell: string) => {
    setDragging(true);
    setStartCell(cell);
    setEndCell(cell);
  };

  const handleMouseMove = (cell: string) => {
    if (isDragging) {
      setEndCell(cell);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const selectCells = () => {
    // Your logic to perform actions on selected cells
    console.log("Selected cells:", startCell, endCell);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th
              onMouseDown={() => handleMouseDown("Header 1")}
              onMouseMove={() => handleMouseMove("Header 1")}
              onMouseUp={handleMouseUp}
            >
              Header 1
            </th>
            <th
              onMouseDown={() => handleMouseDown("Header 2")}
              onMouseMove={() => handleMouseMove("Header 2")}
              onMouseUp={handleMouseUp}
            >
              Header 2
            </th>
            <th
              onMouseDown={() => handleMouseDown("Header 3")}
              onMouseMove={() => handleMouseMove("Header 3")}
              onMouseUp={handleMouseUp}
            >
              Header 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              onMouseDown={() => handleMouseDown("Data 1")}
              onMouseMove={() => handleMouseMove("Data 1")}
              onMouseUp={handleMouseUp}
            >
              Data 1
            </td>
            <td
              onMouseDown={() => handleMouseDown("Data 2")}
              onMouseMove={() => handleMouseMove("Data 2")}
              onMouseUp={handleMouseUp}
            >
              Data 2
            </td>
            <td
              onMouseDown={() => handleMouseDown("Data 3")}
              onMouseMove={() => handleMouseMove("Data 3")}
              onMouseUp={handleMouseUp}
            >
              Data 3
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <button onClick={selectCells}>Copy Selected Cells</button>
    </div>
  );
};

export default Dashboard;
