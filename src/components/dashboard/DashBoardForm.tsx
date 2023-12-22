import styled from "styled-components";
import {
  buttonHoverAnimation,
  inputTextFocusAnimation,
} from "../../styles/GlobalStyle";

type DashBoardFormProps = {
  onChangeCsvFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

const DashBoardForm = ({ onChangeCsvFile, isLoading }: DashBoardFormProps) => {
  return (
    <StyledDashBoardForm loading={isLoading.toString()}>
      <div className="form__buttons">
        <label htmlFor="csv" className="form__label--csv">
          CSV 업로드
        </label>
        <input
          id="csv"
          type="file"
          accept="text/csv"
          multiple
          onChange={onChangeCsvFile}
          hidden
        />
        <button className="table__representer--btn">
          {isLoading ? "파일 업로드 대기중" : "파일 업로드 완료"}
        </button>
      </div>
      {!isLoading && (
        <p className="helptext">
          *csv데이터가 준비되었습니다. <br />
          이제 유저아이디를 검색하여 관련 테이블을 검색할 수 있습니다.
        </p>
      )}
    </StyledDashBoardForm>
  );
};

export default DashBoardForm;

const StyledDashBoardForm = styled.form<{ loading: string }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.margin100};
  border-bottom: 1px solid ${({ theme }) => theme.color.white200};

  .form__buttons {
    display: flex;
    /* margin-bottom: ${({ theme }) => theme.spacing.margin100}; */

    .form__label--csv {
      ${inputTextFocusAnimation};
      ${buttonHoverAnimation};
      width: 90px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .table__representer--btn {
      ${buttonHoverAnimation}
      background-color: ${(props) =>
        props.loading === "true" ? "#adb5bd" : "#20c997"} !important;

      &:hover {
        color: ${(props) =>
          props.loading === "true" ? "#adb5bd" : "#20c997"} !important;
        background-color: ${({ theme }) => theme.color.white100} !important;
        border: 1px solid
          ${(props) => (props.loading === "true" ? "#adb5bd" : "#20c997")} !important;
        box-shadow: 1px 1px 1px 1px
          ${(props) => (props.loading === "true" ? "#adb5bd" : "#20c997")} !important;
        outline: none;
      }
    }
  }

  .helptext {
    color: ${({ theme }) => theme.color.gray100};
    margin-top: ${({ theme }) => theme.spacing.margin100};
  }
`;
