import styled from "styled-components";
import { shadows } from "../../styles";
export const Header = styled.div`
  width: 100%;
  display: flex;
  background: #3268a9;
  padding: 20px;
  color: #fff;
  font-size: 30px;
  justify-content: space-between;
`;

export const AppName = styled.div`
  float: left;
`;

export const User = styled.div`
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  background-color: #fff;
  width: 95%;
  margin: 0 auto;
  box-shadow: ${shadows.very_low};
`;
