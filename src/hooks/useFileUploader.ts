import axios from "axios";
import { ChangeEvent, DragEvent, useState } from "react";

const useFileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return alert("파일이 없습니다.");
    setSelectedFiles(event.target.files);
  };

  const handleFileDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    console.log("[drop] upload files: ", files);
    if (!files) return;
    setSelectedFiles(files);
  };
  const handleDragOver = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);

  //API 서버로 파일 업로드
  const uploadFilesToServer = async () => {
    if (!selectedFiles) return alert("파일이 없습니다.");

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Upload successful:", response.data);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return {
    selectedFiles,
    setSelectedFiles,
    handleFileChange,
    uploadFilesToServer,
    handleFileDrop,
    handleDragOver,
    handleDragLeave,
    isDragging,
  };
};

export default useFileUploader;
