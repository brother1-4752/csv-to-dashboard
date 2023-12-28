import axios from "axios";
import useFileList from "../hooks/useFileList";
import { useState } from "react";
import { filteredResponseType } from "../types/filteredResponseType";
import { HeaderColumns } from "../types/headerColumns";
import styled from "styled-components";

const Test = () => {
  const { selectedFiles, handleFileChange } = useFileList();
  const [filteredList, setFilteredList] = useState<
    filteredResponseType[] | null
  >(null);

  const handleUpload = async () => {
    if (!selectedFiles) return alert("파일이 없습니다.");

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleProcessing = async () => {
    try {
      const response = await axios.post("http://localhost:3000/processing", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("processing successful:", response.data);
    } catch (error) {
      console.error("Error processing files:", error);
    }
  };

  // apps : 8942309, 119350, 413018, 304639
  // ampl : 380293, 2507079, 4248795, 2997548, 962656,
  const handleSearch = async () => {
    const searchedKeyword = "304639";
    try {
      const response = await axios.post(
        "http://localhost:3000/search",
        {
          userId: searchedKeyword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setFilteredList(response.data);
        console.log("search successful:", response.data);
      }
    } catch (error) {
      console.error("Error searching files:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={handleProcessing}>Processing</button>
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredList && (
        <div>
          <StyledDashBoardTable className="table">
            <thead>
              <tr className="table__header">
                {HeaderColumns.map((headerItem, index) => (
                  <th className="table__header--data" key={index}>
                    {headerItem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="table__body">
                <td className="table__body--data">{filteredList[0]['idfa']}</td>
              </tr>
            </tbody>
          </StyledDashBoardTable>
        </div>
      )}
    </div>
  );
};

export default Test;

const StyledDashBoardTable = styled.table`
  /* width: 90%;
  margin: ${({ theme }) => theme.spacing.margin300}; */
  display: grid;
  width: 95%;
  margin: 30px 15px 30px 0;
  table-layout: fixed;
  border-collapse: collapse;
  .table__header,
  .table__body {
    display: flex;

    .table__header--data,
    .table__body--data {
      border: 1px solid ${({ theme }) => theme.color.gray300};
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 50px;
      overflow: scroll;
    }

    .table__header--data {
      background-color: #f8f9fa;
    }
  }
`;
