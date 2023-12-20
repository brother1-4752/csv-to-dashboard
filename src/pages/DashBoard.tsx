import styled from "styled-components";
import useInputCsv from "../hooks/useInputCsv";
import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import DashBoardForm from "../components/dashboard/DashBoardForm";
import DashBoardTable from "../components/dashboard/DashBoardTable";

const DashBoard = () => {
  const { csvArray, csvName, onChangeCsvFile } = useInputCsv();
  const csvHeaderData = csvArray?.[0];
  const csvBodyData = csvArray?.slice(1);

  return (
    <StyledDashBoard>
      <DashBoardHeader />

      <DashBoardForm onChangeCsvFile={onChangeCsvFile} />

      {csvArray && (
        <>
          <h1> 파일 제목 : {csvName}</h1>
          <DashBoardTable
            csvHeaderData={csvHeaderData}
            csvBodyData={csvBodyData}
          />
        </>
      )}
    </StyledDashBoard>
  );
};

export default DashBoard;

const StyledDashBoard = styled.div`
  width: 100%;
`;
