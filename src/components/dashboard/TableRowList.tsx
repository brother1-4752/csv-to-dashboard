import { headerColumnList } from "../../constants/headerColumnLists";

type TableRowListProps = {
  bodyRowList: string[][];
};

const NullRowList = (count: number) => {
  return Array(count)
    .fill(null)
    .map((_, index) => (
      <td className="table__body--data" key={index}>
        {null}
      </td>
    ));
};

const TableRowList = ({ bodyRowList }: TableRowListProps) => {
  //각각 event_time index 찾기
  const appsFlyerEventTimeIndex =
    headerColumnList.indexOf("event_time__apps") + 1; // tool_type 고려
  const amplitudeEventTimeIndex =
    headerColumnList.indexOf("event_time__ampl") + 2; // tool_type 2개 고려
  const headerColumnListLength = headerColumnList.length; // headerColumnList 길이

  // event_time 기준으로 정렬
  const sortedValues = bodyRowList.sort((a, b) => {
    const AppsOrAmplA =
      a[appsFlyerEventTimeIndex] ?? a[amplitudeEventTimeIndex];
    const AppsOrAmplB =
      b[appsFlyerEventTimeIndex] ?? b[amplitudeEventTimeIndex];
    const timeA = new Date(AppsOrAmplA).getTime();
    const timeB = new Date(AppsOrAmplB).getTime();

    return timeB - timeA;
  });

  return sortedValues.map((rowData, rowIndex) => {
    const rowDataLength = rowData.length;
    const diff = headerColumnListLength - rowDataLength;

    return rowData[0] === "appsFlyer" ? (
      <tr key={rowIndex} className="table__body">
        {rowData.slice(1).map((data, index) => {
          return (
            <td key={index} className="table__body--data">
              {data as string}
            </td>
          );
        })}
        {NullRowList(diff + 1)}
      </tr>
    ) : (
      <tr key={rowIndex} className="table__body">
        {NullRowList(diff + 1)}
        {rowData.slice(1).map((data, index) => {
          return (
            <td key={index} className="table__body--data">
              {data as string}
            </td>
          );
        })}
      </tr>
    );
  });
};

export default TableRowList;
