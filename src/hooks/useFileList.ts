import { ChangeEvent, useState } from "react";

const useFileList = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return alert("파일이 없습니다.");
    setSelectedFiles(event.target.files);
  };

  return { selectedFiles, handleFileChange };
};

export default useFileList;
