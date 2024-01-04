import { ChangeEvent, useState } from "react";
import { RowType } from "../types/headerColumnTypes";
import axios from "axios";

type SearchProps = {
  filterType: string;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

const useSearch = ({ filterType, setIsSearching }: SearchProps) => {
  const [filteredRowList, setFilteredRowList] = useState<RowType[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const bodyRowList: string[][] = filteredRowList.map((row) =>
    Object.values(row)
  );

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setKeyword(keyword);
  };

  // apps : 8942309, 119350, 413018, 304639
  // ampl : 380293, 2507079, 4248795, 2997548, 962656,
  const handleSearch = async () => {
    const userId = keyword;
    try {
      setIsSearching(true);
      const response = await axios.post(
        "http://localhost:3000/search",
        { filterType, userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsSearching(false);
      if (response.status === 200) {
        setFilteredRowList(response.data.list);
        console.log("Search successful:", response.data.list);
      }
    } catch (error) {
      console.error("Error searching files:", error);
    }
  };

  return {
    filteredRowList,
    handleKeywordChange,
    handleSearch,
    bodyRowList,
  };
};

export default useSearch;
