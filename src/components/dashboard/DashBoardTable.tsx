import { Fragment } from "react";
import styled from "styled-components";

type DashBoardTableProps = {
  csvData: string[][];
};

const DashBoardTable = ({ csvData }: DashBoardTableProps) => {
  const columnLength = 4;

  return (
    <StyledDashBoardTable className="table" columnLength={columnLength}>
      <table>
        {csvData.map((csvData, index) => (
          <Fragment key={index}>
            <thead>
              <tr className="table__header">
                {csvData.map((header, index) => (
                  <th className="table__header--data" key={index}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="table__body">
                {csvData.slice(1).map((body, index) => (
                  <td key={index} className="table__body--data">
                    {body}
                  </td>
                ))}
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>

      {/* <thead>
        <tr className="table__header">
          {csvHeaderData?.map((header, index) => (
            <th className="table__header--data" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csvBodyData?.map((body) => (
          <tr className="table__body" key={body[0]}>
            {body.map((data, index) => (
              <td className="table__body--data" key={index}>
                {data}
              </td>
            ))}
          </tr>
        ))}
      </tbody> */}
    </StyledDashBoardTable>
  );
};

export default DashBoardTable;

const StyledDashBoardTable = styled.table<{ columnLength: number }>`
  width: 90%;
  margin: ${({ theme }) => theme.spacing.margin300};

  .table__header,
  .table__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .table__header--data,
    .table__body--data {
      border: 1px solid ${({ theme }) => theme.color.gray300};
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .table__header--data {
      background-color: #f8f9fa;
    }
  }
`;
