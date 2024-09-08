import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// 애니메이션 정의
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const LoginText = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  animation: ${fadeInUp} 0.8s ease-in-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

export const LoginTextBold = styled.span`
  color: #007355;
  font-weight: 700;
`;

export const Logo = styled.img`
  width: 160px;
  height: 237px;
  animation: ${fadeInUp} 0.8s ease-in-out forwards;
  animation-delay: 1s;
  opacity: 0;
`;

export const Kakao = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 8px;
  background: #fee502;

  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  animation: ${fadeInUp} 0.8s ease-in-out forwards;
  animation-delay: 1.6s;
  opacity: 0;

  &:hover {
    background: #c6b200;
    color: #000;
  }
`;

export const KakaoLogo = styled.img`
  position: absolute;
  left: 30px;
  width: 18px;
  height: 18px;
`;
