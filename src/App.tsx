import { Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  display: flex;
  /* padding: ${({ theme }) => theme.spacing.margin200}; */
`;
