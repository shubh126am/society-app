import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: linear-gradient(0deg, #30cfd0, #330867);
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 420px;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fff;
`;

export const HeaderForm = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 0.5em 2.5em;
  width: 100%;
  text-align: center;
  height: 26%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b2238;
`;
