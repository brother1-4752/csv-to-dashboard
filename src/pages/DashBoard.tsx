import styled from "styled-components";
import useInputCsv from "../hooks/useInputCsv";
import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import DashBoardForm from "../components/dashboard/DashBoardForm";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const { csvFileList, isLoading, onChangeCsvFile } = useInputCsv();
  const [allCsvDataString, setAllCsvDataString] = useState<string>("");

  // 검색되거나, 정렬되지 않은 상태의 total csv data
  useEffect(() => {
    if (csvFileList !== null) {
      const createAllCsvDataList = async () => {
        await Promise.all(
          Array.from(csvFileList).map(async (csvFile) => {
            const stream = csvFile.stream();
          })
        );
      };
    }
  }, [csvFileList]);

  // const testArr = testStr.split("\n").map((row) => row.split(/,(?![^{}]*})/g));

  // console.log(testStr);
  // console.log(testArr);

  return (
    <StyledDashBoard>
      <DashBoardHeader />

      <DashBoardForm onChangeCsvFile={onChangeCsvFile} isLoading={isLoading} />
    </StyledDashBoard>
  );
};

export default DashBoard;

const StyledDashBoard = styled.div`
  width: 100%;
`;
