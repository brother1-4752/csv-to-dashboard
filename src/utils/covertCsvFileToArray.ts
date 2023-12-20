const covertCsvFileToArray = async (csv: File) => {
  const readFile = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  const csvText = (await readFile(csv)) as string;
  const csvArray = csvText.split("\n").map((row: string) => row.split(","));
  return csvArray;
};

export default covertCsvFileToArray;
