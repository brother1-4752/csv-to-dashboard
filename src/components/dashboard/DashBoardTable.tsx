import styled from "styled-components";

type DashBoardTableProps = {
  csvData: string[][];
};

const DashBoardTable = ({ csvData }: DashBoardTableProps) => {
  return (
    <StyledDashBoardTable className="table">
      <thead>
        <tr className="table__header">
          {csvData[0].map((headerItem, index) => (
            <th className="table__header--data" key={index}>
              {headerItem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csvData?.slice(1).map((bodyItem, index) => (
          <tr className="table__body" key={index}>
            {bodyItem.map((data, index) => (
              <td className="table__body--data" key={index}>
                {data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledDashBoardTable>
  );
};

export default DashBoardTable;

const StyledDashBoardTable = styled.table`
  width: 90%;
  margin: ${({ theme }) => theme.spacing.margin300};

  .table__header,
  .table__body {
    display: grid;
    grid-template-columns: repeat(148, 1fr);

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
