import styled from "styled-components";
import axios from "axios";

import useFileUploader from "../hooks/useFileUploader";
import { headerColumnList } from "../constants/headerColumnLists";
import useSearch from "../hooks/useSearch";
import TableRowList from "../components/dashboard/TableRowList";
import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import { DataIcon, FileIcon, SendingIcon } from "../components/common/Icons";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { buttonHoverAnimation } from "../styles/GlobalStyle";

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>("userId");

  const {
    selectedFiles,
    handleFileChange,
    uploadFilesToServer,
    handleFileDrop,
    handleDragOver,
    handleDragLeave,
    isDragging,
  } = useFileUploader();
  const { filteredRowList, handleKeywordChange, handleSearch, bodyRowList } =
    useSearch({ filterType, setIsSearching });

  const handleProcessing = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/processing", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("processing successful:", response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error processing files:", error);
    }
  };

  return (
    <StyledDashBoard>
      <DashBoardHeader
        handleKeywordChange={handleKeywordChange}
        handleSearch={handleSearch}
        setFilterType={setFilterType}
      />

      {/* 업로드 컴포넌트 */}
      <div className="upload">
        {/* 파일 업로드 영역 */}
        <div
          className="form__container"
          style={{ opacity: isDragging ? 0.8 : 1 }}
        >
          <label
            className="form__label"
            htmlFor="userfile"
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <FileIcon width={100} height={100} />
            <p>Drag or upload csv files</p>
          </label>
          <input
            id="userfile"
            multiple
            type="file"
            name="userfile"
            accept="text/csv"
            hidden
            onChange={handleFileChange}
          />
        </div>
        {/* 파일리스트 영역 */}
        <div className="filelist__container">
          <ul
            className="filelist"
            style={{ height: selectedFiles ? "230px" : "300px" }}
          >
            {!selectedFiles && (
              <div className="filelist__item--nodata">
                <DataIcon width={60} height={60} color="#DB4D6E" />
                <p>현재 업로드된 파일 없음</p>
              </div>
            )}
            {selectedFiles &&
              (isLoading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    boxSizing: "border-box",
                    borderRadius: "8px",
                  }}
                >
                  <ClipLoader color="#DB4D6E" size={60} />
                </div>
              ) : (
                Array.from(selectedFiles).map((file, index) => (
                  <li key={index} className="filelist__item">
                    <div className="filelist__item--icon">
                      <FileIcon width={30} height={30} color="#DB4D6E" />
                    </div>
                    <div className="filelist__item--info">
                      <p>{file.name}</p>
                      <p>{(file.size / 1000 / 1000).toFixed(1)}MB</p>
                    </div>
                  </li>
                ))
              ))}
          </ul>
        </div>
        {/* 컨트롤 버튼 영역 */}
        {selectedFiles && (
          <div className="upload__buttons">
            <button
              onClick={uploadFilesToServer}
              className="upload__button--upload"
            >
              서버 업로드
            </button>

            <button
              className="upload__button--processing"
              onClick={handleProcessing}
            >
              데이터 처리
            </button>
          </div>
        )}
      </div>

      <div className="main__container">
        <div className="header__title">
          <span>
            <SendingIcon width={24} height={24} />
          </span>
          <span className="title">Csv To DashBoard</span>
          {filteredRowList.length > 0 && (
            <span className="counts">
              : {filteredRowList.length}개의 데이터 검색됨
            </span>
          )}
        </div>
        {/* 데이터 테이블 영역 */}
        {filteredRowList.length > 0 ? (
          <StyledDashBoardTable>
            <table className="table">
              <thead>
                <tr className="table__header">
                  {headerColumnList.map((headerItem, index) => (
                    <th className="table__header--data" key={index}>
                      {headerItem}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <TableRowList bodyRowList={bodyRowList} />
              </tbody>
            </table>
          </StyledDashBoardTable>
        ) : (
          <NoDataMessage>
            {isSearching ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  boxSizing: "border-box",
                  borderRadius: "8px",
                }}
              >
                <ClipLoader color="#DB4D6E" size={60} />
              </div>
            ) : (
              "데이터가 없습니다."
            )}
          </NoDataMessage>
        )}
      </div>
    </StyledDashBoard>
  );
};

export default DashBoard;

const NoDataMessage = styled.div`
  color: #db4d6e; /* 텍스트 색상을 흰색으로 설정 */
  background-color: #fff; /* 메인 색상 설정 */
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid #db4d6e; /* 테두리 색상을 옅은 회색으로 설정 */
  border-radius: 5px;
  opacity: 0.35;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const StyledDashBoard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .upload {
    width: 100%;
    height: 350px;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;

    .form__container {
      border: 1px dashed ${({ theme }) => theme.color.primary100};
      border-radius: 8px;
      width: 90%;
      height: 300px;
      margin: 32px;
      box-sizing: border-box;
      font-size: ${({ theme }) => theme.font.getSize(18)};
      font-family: "SpoqaHanSansB";
      color: ${({ theme }) => theme.color.white100};
      background-color: ${({ theme }) => theme.color.primary100};
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

      .form__label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          opacity: 0.6;
        }
      }
    }

    .filelist__container {
      width: 100%;
      .filelist {
        margin: 32px;
        overflow: scroll;
        border-radius: 8px;

        .filelist__item--nodata {
          display: flex;
          color: #db4d6e;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          border: 1px solid rgba(219, 77, 110);
          border-radius: 8px;
          box-sizing: border-box;
          opacity: 0.35;
          gap: 8px;
          zoom: 1.5;
        }

        .filelist__item {
          display: flex;
          margin-bottom: 8px;
          align-items: center;

          .filelist__item--icon {
            display: flex;
            align-items: center;
            margin-right: 8px;
          }
          .filelist__item--info {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }

    .upload__buttons {
      position: absolute;
      bottom: 24px;
      right: 24px;
      display: flex;
      gap: 8px;

      .upload__button--upload,
      .upload__button--processing,
      .upload__button--renew {
        ${buttonHoverAnimation}
      }
    }
  }

  .main__container {
    width: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;

    .header__title {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.font.getSize(21)};
      color: ${({ theme }) => theme.color.black300};
      margin: ${({ theme }) => theme.spacing.margin000} 0;

      .counts {
        color: ${({ theme }) => theme.color.primary100};
        margin-left: 8px;
        opacity: 0.6;
        font-size: 16px;
      }
    }
  }
`;

const StyledDashBoardTable = styled.div`
  overflow-x: scroll;

  .table {
    display: grid;
    width: 95%;
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
  }
`;
