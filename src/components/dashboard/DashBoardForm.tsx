import styled from "styled-components";
import {
  buttonHoverAnimation,
  inputTextFocusAnimation,
} from "../../styles/GlobalStyle";

type DashBoardFormProps = {
  onChangeCsvFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DashBoardForm = ({ onChangeCsvFile }: DashBoardFormProps) => {
  return (
    <StyledDashBoardForm>
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
    </StyledDashBoardForm>
  );
};

export default DashBoardForm;

const StyledDashBoardForm = styled.form`
  margin-left: ${({ theme }) => theme.spacing.margin100};

  .form__label--csv {
    ${inputTextFocusAnimation};
    ${buttonHoverAnimation};
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
`;
