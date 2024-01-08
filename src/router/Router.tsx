import { ReactNode } from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../pages/DashBoard";

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
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
