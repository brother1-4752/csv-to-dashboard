import styled from "styled-components";
import {
  buttonHoverAnimation,
  inputTextFocusAnimation,
} from "../../styles/GlobalStyle";

type DashBoardHeaderProps = {
  handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => Promise<void>;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
};

const DashBoardHeader = ({
  handleKeywordChange,
  handleSearch,
  setFilterType,
}: DashBoardHeaderProps) => {
  
  const onChangeFilterType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const filterType = event.target.value;
    setFilterType(filterType);
  };
  return (
    <StyledHeader>
      <div className="form__search">
        <select
          name="search__filter--type"
          className="search__filter--select"
          onChange={onChangeFilterType}
        >
          <option value="userId">유저아이디</option>
        </select>
        <input
          id="search"
          type="text"
          className="form__search--input"
          onChange={handleKeywordChange}
        />
        <button onClick={handleSearch} className="form__search--btn">
          검색
        </button>
      </div>
    </StyledHeader>
  );
};

export default DashBoardHeader;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.white200};
  padding: ${({ theme }) => theme.spacing.margin100};
  gap: 4px;
  font-size: ${({ theme }) => theme.font.getSize(16)};
  font-family: "SpoqaHanSans";
  position: relative;

  .form__search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    .search__filter--select {
      margin-right: 8px;
      border: 1px solid ${({ theme }) => theme.color.gray300};
      border-radius: 4px;
      color: ${({ theme }) => theme.color.gray100};
      cursor: pointer;
      padding: 3px 6px;
    }

    .form__search--input {
      ${inputTextFocusAnimation};
    }

    .form__search--btn {
      ${buttonHoverAnimation}
    }
  }
`;
