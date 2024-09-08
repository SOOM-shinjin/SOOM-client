import React from 'react';
import * as S from './style';
import LogoImg from '../../../public/images/mainLogo.png';
import KakaoImg from '../../../public/images/kakao.png';

const LoginPage = () => {
  return (
    <>
      <S.LoginWrapper>
        <S.LoginText>
          <S.LoginTextBold>숨</S.LoginTextBold> 쉴 틈 없이 달려온 당신을 위해
        </S.LoginText>

        <S.Logo src={LogoImg} />

        <S.Kakao to={'/'}>
          카카오 로그인
          <S.KakaoLogo src={KakaoImg} />
        </S.Kakao>
      </S.LoginWrapper>
    </>
  );
};

export default LoginPage;
