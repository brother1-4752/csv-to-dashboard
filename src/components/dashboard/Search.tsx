import { FormEvent, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  FilterType,
  filterKeywordState,
  filterTypeState,
} from "../../atoms/atoms";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterKeyword, setFilterKeyword] = useRecoilState(filterKeywordState);
  const setFilterType = useSetRecoilState(filterTypeState);
  console.log(filterKeyword);
  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
  };

  const search = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFilterKeyword(searchKeyword);
  };

  const onChangeFilterType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const filterType = event.target.value as FilterType;
    setFilterType(filterType);
  };
  return (
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
        onChange={onChangeSearchKeyword}
      />
      <button onClick={search} className="form__search--btn">
        검색
      </button>
    </div>
  );
};

export default Search;
