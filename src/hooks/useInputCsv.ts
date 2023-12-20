import { ChangeEvent, useState } from "react";

const useInputCsv = () => {
  const [csvArray, setCsvArray] = useState<string[][] | null>(null);
  const [csvName, setCsvName] = useState<string>("");

  const onChangeCsvFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("files : \n", event.target.files);
      const csvName = event.target.files[0].name;
      setCsvName(csvName)
      const csvFile = event.target.files[0];
      const readFile = (file: File) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsText(file);
        });
      const csvText = (await readFile(csvFile)) as string;
      const csvArray = csvText
        .split("\r\n")
        .map((row: string) => row.split(","));
      setCsvArray(csvArray);
    }
  };

  return { csvArray, csvName, onChangeCsvFile };
};

export default useInputCsv;
