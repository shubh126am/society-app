import styled from "styled-components";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";

export const Username = styled(Text)`
  font-family: Roboto, Poppins, sans-serif;
  font-size: 0.9em;
  color: #fff;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding: 0 12px;
  transition: all 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
    cursor: pointer;
  }
`;

export const RightContent = styled.div`
  display: flex;
  padding: 0px 16px;
  margin-left: auto;
  float: right;
  color: #fff;
`;

export const BrandLink = styled(Link)`
  width: 139px;
  height: 29px;
  font-family: Roboto, Poppins, sans-serif;
  font-weight: 700;
  text-decoration: none solid;
  margin-left: 2em;
  font-size: 1.4em;
  color: #fff;
  text-decoration: none solid;
  &:hover {
    color: #33539e;
  }
`;
