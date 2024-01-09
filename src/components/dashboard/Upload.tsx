import axios from "axios";
import { ChangeEvent, DragEvent, MouseEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { DataIcon, FileIcon } from "../common/Icons";
import { buttonHoverAnimation } from "../../styles/GlobalStyle";
import { useSetRecoilState } from "recoil";
import { dataListState } from "../../atoms/atoms";

const Upload = () => {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const setDataList = useSetRecoilState(dataListState);

  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const url = "http://localhost:3000/upload";

    const formData = new FormData();
    if (!fileList) return;
    for (const file of fileList) {
      formData.append("files", file);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.post(url, formData, config);
      setDataList(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    console.log("upload", files);

    // 파일 검증
    if (!files) {
      alert("csv 파일을 선택해주세요.");
      return;
    }

    setFileList(files);
  };

  const handleFileDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    console.log("drop", files);
    if (!files) return;
    setFileList(files);
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <StyledUpload>
        <form
          className="form__container"
          style={{
            opacity: isDragging ? 0.8 : 1,
          }}
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
            onChange={onChange}
          />
        </form>
        <div className="filelist__container">
          <ul
            className="filelist"
            style={{ height: fileList ? "230px" : "300px" }}
          >
            {!fileList && (
              <div className="filelist__item--nodata">
                <DataIcon width={60} height={60} color="#DB4D6E" />
                <p>데이터 없음</p>
              </div>
            )}
            {fileList &&
              (isLoading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    //   border: "1px solid #DB4D6E",
                    boxSizing: "border-box",
                    borderRadius: "8px",
                  }}
                >
                  <ClipLoader color="#DB4D6E" size={60} />
                </div>
              ) : (
                Array.from(fileList).map((file, index) => (
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
        {fileList && (
          <div className="upload__buttons">
            <button className="upload__button--merge" onClick={onSubmit}>
              병합
            </button>
            <button
              className="upload__button--renew"
              onClick={(event) => {
                event.preventDefault();
                setFileList(null);
              }}
            >
              초기화
            </button>
          </div>
        )}
      </StyledUpload>
    </>
  );
};

export default Upload;

const StyledUpload = styled.div`
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
        border: 1px solid #db4d6e;
        border-radius: 8px;
        box-sizing: border-box;
        opacity: 0.35;
        gap: 8px;
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

    .upload__button--merge,
    .upload__button--renew {
      ${buttonHoverAnimation}
    }
  }
`;
