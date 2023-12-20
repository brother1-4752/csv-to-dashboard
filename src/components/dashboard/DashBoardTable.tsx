import styled from "styled-components";

type DashBoardTableProps = {
  csvHeaderData: string[] | undefined;
  csvBodyData: string[][] | undefined;
};

const DashBoardTable = ({
  csvHeaderData,
  csvBodyData,
}: DashBoardTableProps) => {
  return (
    <StyledDashBoardTable className="table">
      <thead>
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
      </tbody>
    </StyledDashBoardTable>
  );
};

export default DashBoardTable;

const StyledDashBoardTable = styled.table`
  width: 90%;
  margin: ${({ theme }) => theme.spacing.margin100};

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
