import { ChangeEvent, useState } from "react";

const CsvUploader = () => {
  const [csvFiles, setCsvFiles] = useState<File[]>([]);

  const onChangeCsvInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = event.target.files;
      const filesArray = Array.from(selectedFiles);
      setCsvFiles(filesArray);
    }
  };

  const handleUpload = () => {
    csvFiles.forEach((file) => {
      console.log("Uploading file:", file.name);
    });
  };

  return (
    <div>
      <h1>CSV File Uploader</h1>
      <input type="file" accept=".csv" multiple onChange={onChangeCsvInput} />
      <button onClick={handleUpload}>Upload CSV Files</button>

      {/* Display the list of selected files */}
      {csvFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {csvFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CsvUploader;
