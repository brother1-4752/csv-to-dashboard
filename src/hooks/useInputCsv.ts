import { ChangeEvent, useState } from "react";

// 목적: 유저가 업로드한 csv 파일들을 받아 FileList 타입으로 state에 저장
const useInputCsv = () => {
  const [csvFileList, setCsvFileList] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onChangeCsvFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    // 파일 검증
    if (!files) {
      alert("csv 파일을 선택해주세요.");
      return;
    }

    setCsvFileList(files);
    setIsLoading(false);
  };

  return { csvFileList, isLoading, onChangeCsvFile };
};

export default useInputCsv;
