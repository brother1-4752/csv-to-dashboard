import styled from "styled-components";
import useInputCsv from "../hooks/useInputCsv";
import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import DashBoardForm from "../components/dashboard/DashBoardForm";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filterKeywordState,
  dataListState,
  filteredListState,
  totalStringState,
  filterTypeState,
  FilterType,
} from "../atoms/atoms";
import DashBoardTable from "../components/dashboard/DashBoardTable";
import {
  buttonHoverAnimation,
  inputTextFocusAnimation,
} from "../styles/GlobalStyle";
import DashBoardCardList from "../components/dashboard/DashBoardCardList";

const DashBoard = () => {
  const { csvFileList, isLoading, onChangeCsvFile } = useInputCsv();
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const [totalString, setTotalString] = useRecoilState(totalStringState);
  const filteredList = useRecoilValue(filteredListState);
  const [filterKeyword, setFilterKeyword] = useRecoilState(filterKeywordState);
  const setFilterType = useSetRecoilState(filterTypeState);
  const setDataList = useSetRecoilState(dataListState);

  // TODO: 추후 검색 기능으로 변경

  // 검색되거나, 정렬되지 않은 상태의 total csv data
  useEffect(() => {
    if (csvFileList !== null) {
      const createtotalString = async () => {
        try {
          await Promise.all(
            Array.from(csvFileList).map(async (csvFile) => {
              const stream = csvFile.stream();
              const csvText = await new Response(stream).text();
              setTotalString((prev) => {
                if (prev === null) return csvText;

                return prev + "\n" + csvText;
              });
            })
          );
        } catch (err) {
          console.log(err);
        }
      };
      createtotalString();
      console.log("csv 업로드시 :", "totalString 업데이트됨.\n");
      return;
    }
    console.log("처음 로딩시 :", "아무것도 fetching 안됨.\n");
  }, [csvFileList]);

  const convertCsvToDataList = (totalString: string) => {
    const dataList = totalString
      .split("\n")
      .map((row) => row.split(/,(?![^{}]*})/));
    setDataList(dataList);
    console.log("dataList 업데이트됨.\n");
  };

  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
  };

  const search = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (totalString) {
      convertCsvToDataList(totalString);
      setFilterKeyword(searchKeyword);
    }
  };

  const onChangeFilterType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const filterType = event.target.value as FilterType;
    setFilterType(filterType);
  };

  return (
    <StyledDashBoard>
      <DashBoardHeader />

      <DashBoardForm onChangeCsvFile={onChangeCsvFile} isLoading={isLoading} />
      {!isLoading && (
        <div className="form__search">
          <select
            name="search__filter--type"
            className="search__filter--select"
            onChange={onChangeFilterType}
          >
            <option value="userId">유저아이디</option>
            <option value="eventName">이벤트명</option>
          </select>
          <input
            id="search"
            type="text"
            className="form__search--input"
            onChange={onChangeSearchKeyword}
          />
          <button onClick={search} className="form__search--btn">
            검색
          </button>
        </div>
      )}

      {filteredList && (
        <div>
          <DashBoardTable csvData={filteredList} />
        </div>
      )}

      {/* {filteredList && (
        <DashBoardCardList
          filterKeyword={filterKeyword}
          filteredList={filteredList}
        />
      )} */}
    </StyledDashBoard>
  );
};

export default DashBoard;

const StyledDashBoard = styled.div`
  width: 100%;

  .form__search {
    margin: ${({ theme }) => theme.spacing.margin100};
    display: flex;

    .search__filter--select {
      margin-right: 8px;
      border: 1px solid ${({ theme }) => theme.color.gray300};
      border-radius: 4px;
      color: ${({ theme }) => theme.color.gray100};
      cursor: pointer;

      & > option {
      }
    }

    .form__search--input {
      ${inputTextFocusAnimation};
    }

    .form__search--btn {
      ${buttonHoverAnimation}
    }
  }
`;

// ------------------------------

// import { ChangeEvent, FormEvent, useState } from "react";
// import axios from "axios";
// import { ClipLoader } from "react-spinners";
// const DashBoard = () => {
//   const [fileList, setFileList] = useState<FileList | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const onsubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const url = "http://localhost:3000/upload";

//     const formData = new FormData();
//     if (!fileList) return;
//     for (const file of fileList) {
//       formData.append("files", file);
//       formData.append("fileNames", file.name);
//     }

//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };

//     try {
//       setIsLoading(true);
//       const response = await axios.post(url, formData, config);
//       console.log(response);
//       setIsLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     const files = event.target.files;

//     // 파일 검증
//     if (!files) {
//       alert("csv 파일을 선택해주세요.");
//       return;
//     }

//     console.log(files);
//     setFileList(files);
//   };

//   return (
//     <StyledDashBoard>
//       <DashBoardHeader />

//       <form onSubmit={onsubmit}>
//         <label htmlFor="userfile">파일 업로드</label>
//         <input
//           id="userfile"
//           multiple
//           type="file"
//           name="userfile"
//           accept="text/csv"
//           onChange={onChange}
//         />
//         <button type="submit">제출</button>
//       </form>
//       {isLoading && <ClipLoader color="#36d7b7" loading size={30} />}
//     </StyledDashBoard>
//   );
// };

// export default DashBoard;
