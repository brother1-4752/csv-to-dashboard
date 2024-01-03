import axios from "axios";
import useFileList from "../hooks/useFileList";
import { Fragment, useState } from "react";
import { HeaderColumns } from "../types/headerColumns";
import styled from "styled-components";

const Test = () => {
  const { selectedFiles, handleFileChange } = useFileList();
  //eslint-disable-next-line
  const [mergedList, setMergedList] = useState<any[]>([]);
  const bodyRowValues = mergedList.map((item) => Object.values(item));
  const HeaderColumnsLength = HeaderColumns.length;

  console.log("bodyRowValues", bodyRowValues);

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

      console.log("processing successful:", response);
    } catch (error) {
      console.error("Error processing files:", error);
    }
  };

  // apps : 8942309, 119350, 413018, 304639
  // ampl : 380293, 2507079, 4248795, 2997548, 962656,
  const handleSearch = async () => {
    const searchedKeyword = "8942309";
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
        setMergedList(response.data.list);
        console.log("search successful:", response.data.list);
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
      {mergedList.length > 0 && (
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
                {bodyRowValues.map((subArray, index) => {
                  const subArrayLength = subArray.length;
                  const difference = HeaderColumnsLength - subArrayLength;

                  if (subArray[0] === "appsFlyer") {
                    return (
                      <Fragment key={index}>
                        {subArray.map((data, index) => (
                          <td key={index} className="table__body--data">
                            {data as string}
                          </td>
                        ))}
                      </Fragment>
                    );
                  }

                  if (subArray[0] === "amplitude") {
                    return (
                      <Fragment key={index}>
                        {subArray.map((data, index) => (
                          <td key={index} className="table__body--data">
                            {data as string}
                          </td>
                        ))}
                      </Fragment>
                    );
                  }

                  // {
                  //   Array(difference)
                  //     .fill(null)
                  //     .map((_, index) => (
                  //       <tr className="table__body" key={index}>
                  //         <td className="table__body--data">{null}</td>
                  //       </tr>
                  //     ));
                  // }

                  return <div key={index}></div>;
                })}
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
