import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  padding: 0 20px;
`;

const ActionsButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 20px;
  font-weight: 400;
  h2 {
    text-align: center;
    margin: 20px 0px;
    font-size: 30px;
    display: block;
    font-weight: 600;
  }
`;

export { Wrapper, ActionsButton, ButtonWrapper, FormWrapper };
