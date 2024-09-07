import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Wrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  /* font-family: Pretendard; */
  color: black;
  box-shadow: 0px 0px 10px 0px rgba(41, 41, 41, 0.25);
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 52px;
`;

const Layout = () => {
  return (
    <BackGroundColor>
      <Wrapper>
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
