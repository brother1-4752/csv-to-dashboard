import styled from "styled-components";
import { SendingIcon } from "../common/Icons";

const DashBoardHeader = () => {
  return (
    <StyledHeader>
      <span>
        <SendingIcon width={20} height={20} />
      </span>
      <span className="title">Csv To DashBoard</span>
    </StyledHeader>
  );
};

export default DashBoardHeader;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.white200};
  padding: ${({ theme }) => theme.spacing.margin100};
  gap: 4px;
  font-size: ${({ theme }) => theme.font.getSize(16)};
  font-family: "SpoqaHanSans";
  margin-bottom: ${({ theme }) => theme.spacing.margin200};
`;
