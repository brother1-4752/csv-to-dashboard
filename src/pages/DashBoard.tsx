import styled from "styled-components";
import useInputCsv from "../hooks/useInputCsv";
import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import DashBoardForm from "../components/dashboard/DashBoardForm";
import { FormEvent, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  csvDataListState,
  filteredcsvDataListState,
  totalCsvTextState,
  userIdFilterState,
} from "../atoms/atoms";
import DashBoardTable from "../components/dashboard/DashBoardTable";

const DashBoard = () => {
  const { csvFileList, isLoading, onChangeCsvFile } = useInputCsv();
  const [totalCsvText, setTotalCsvText] = useRecoilState(totalCsvTextState);
  const setCsvDataList = useSetRecoilState(csvDataListState);
  const setFilter = useSetRecoilState(userIdFilterState);
  const filteredDataList = useRecoilValue(filteredcsvDataListState);

  // TODO: 추후 검색 기능으로 변경
  const mockCustomerId = import.meta.env.VITE_MOCK_CUSTOMER_ID;

  // 검색되거나, 정렬되지 않은 상태의 total csv data
  useEffect(() => {
    if (csvFileList !== null) {
      const createTotalCsvText = async () => {
        await Promise.all(
          Array.from(csvFileList).map(async (csvFile) => {
            const stream = csvFile.stream();
            const csvText = await new Response(stream).text();
            setTotalCsvText((prev) => {
              if (prev === null) return csvText;

              return prev + "\n" + csvText;
            });
          })
        );
      };
      createTotalCsvText();
      console.log("csv 업로드시 :", "totalCsvText 업데이트됨.\n");
      return;
    }
    console.log("처음 로딩시 :", "아무것도 fetching 안됨.\n");
  }, [csvFileList]);

  const convertCsvToDataList = (totalString: string) => {
    const dataList = totalString
      .split("\n")
      .map((row) => row.split(/,(?![^{}]*})/));
    setCsvDataList(dataList);
  };

  const search = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (totalCsvText) {
      convertCsvToDataList(totalCsvText);
      setFilter(mockCustomerId);
      console.log(filteredDataList);
    }
  };

  return (
    <StyledDashBoard>
      <DashBoardHeader />

      <DashBoardForm onChangeCsvFile={onChangeCsvFile} isLoading={isLoading} />
      {!isLoading && <button onClick={search}>검색</button>}

      {filteredDataList && (
        <div>
          {filteredDataList && <DashBoardTable csvData={filteredDataList} />}
        </div>
      )}
    </StyledDashBoard>
  );
};

export default DashBoard;

const StyledDashBoard = styled.div`
  width: 100%;
`;
