import styled from "styled-components";
import { shadows, colors, weight } from "../../../../styles";
const Card = styled.div`
  box-shadow: ${shadows.low};
  background-color: ${props => props.color};
  border-radius: 5px;
  color: white;
  height: 155px;
  &:hover {
    box-shadow: ${shadows.medium};
  }
`;

const CardLabel = styled.div`
  font-size: 20px;
  font-weight: ${weight.normal};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperContent = styled.div`
  padding: 0 20px;
  margin-top: 30px;
`;

const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 70%;
`;

export { Card, CardLabel, CardIcon, WrapperContent };
