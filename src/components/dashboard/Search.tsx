import { FormEvent, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  filterKeywordState,
  isSearchdState,
  totalStringState,
} from "../../atoms/atoms";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const setFilterKeyword = useSetRecoilState(filterKeywordState);
  const totalString = useRecoilValue(totalStringState);
  const setIsSearched = useSetRecoilState(isSearchdState);

  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
  };

  const search = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (totalString) {
      setIsSearched(true);
      setFilterKeyword(searchKeyword);
    }
  };

  return (
    <header className="form__search">
      <div className="search__left">
        <input className="search__input--startDate" type="date" />
        <span style={{ marginRight: "4px" }}> ~ </span>
        <input className="search__input--endDate" type="date" />
        <button className="date__apply--btn">적용</button>
      </div>
      <div className="search__right">
        <select name="search__filter--type" className="search__filter--select">
          <option value="userId">유저아이디</option>
        </select>
        <input
          id="search"
          type="text"
          className="search__input--text"
          onChange={onChangeSearchKeyword}
        />
        <button onClick={search} className="form__search--btn">
          검색
        </button>
      </div>
    </header>
  );
};

export default Search;
