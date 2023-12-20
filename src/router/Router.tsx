import { ReactNode } from "react";
import App from "../App";
import DashBoard from "../pages/DashBoard";
import { createBrowserRouter } from "react-router-dom";
import CsvUploader from "../pages/CsvUploader";

interface RouterData {
  path: string;
  label: string;
  element: ReactNode;
  children?: RouterData[];
}

const routerData: RouterData[] = [
  {
    path: "/",
    label: "홈",
    element: <App />,
    children: [
      {
        path: "",
        label: "대시보드",
        element: <DashBoard />,
      },
      {
        path: "test",
        label: "테스트",
        element: <CsvUploader />,
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
