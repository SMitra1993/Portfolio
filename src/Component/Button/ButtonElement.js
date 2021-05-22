import styled from "styled-components";

import { Link } from "react-scroll";

export const Button = styled(Link)`
  white-space: nowrap;
  background: ${({ primary }) => (primary ? "#b25ce7" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "#20px" : "16px")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#b25ce7")};
  }
`;
