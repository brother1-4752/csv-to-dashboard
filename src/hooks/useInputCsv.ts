import { ChangeEvent, useState } from "react";

// 목적: 유저가 업로드한 csv 파일들을 받아 FileList 타입으로 state에 저장
const useInputCsv = () => {
  const [csvFileList, setCsvFileList] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // blob 테스트용
  // const fileToBlob = (file: File) => {
  //   return
  // };

  // const checkLoadingStatus = () => {};

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

// const splitStream = (splitOn: string) => {
//   let buffer = "";

//   return new TransformStream({
//     transform(chunk, controller) {
//       buffer += chunk;
//       const parts = buffer.split(splitOn);
//       parts.slice(0, -1).forEach((part) => controller.enqueue(part));
//       buffer = parts[parts.length - 1];
//     },
//     flush(controller) {
//       if (buffer) controller.enqueue(buffer);
//     },
//   });
// };

// const file = event.target.files?.[0];
// const stream = file?.stream();
// await stream?.pipeThrough(new TextDecoderStream()).pipeTo(
//   new WritableStream({
//     write(row) {
//       const cols = row.split(",").join("\t");
//       console.log("1:", cols);
//     },
//   })
// );

// if (event.target.files) {
//   const files = event.target.files;

//   for (const file of files) {
//     const stream = file.stream();
//     await stream
//       .pipeThrough(new TextDecoderStream())
//       .pipeThrough(splitStream("\n"))
//       .pipeTo(
//         new WritableStream({
//           write(row) {
//             const cols = row.split(",");
//             console.log(cols.join("\t"));
//           },
//         })
//       );
//   }
// }
