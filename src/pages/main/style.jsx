import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const MainWrapper = styled.div`
  width: 335px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 94px;
  height: 40px;
`;
export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  border-bottom: 1px solid #d9d9d9;
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 28px;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
export const SearchImg = styled.img`
  position: absolute;
  left: 4px; /* input 내부 오른쪽 여백 */
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// 배너
export const Banner = styled.img`
  margin-top: 33px;
  width: 335px;
  height: 160px;
  border-radius: 10px;
`;

// 추천 코스
export const CourseWrapper = styled.div`
  /* background-color: pink; */
  display: flex;
  margin-top: 33px;
  gap: 28px;
`;

export const RecommendedCourseWrapper = styled.div`
  width: 160px;
  gap: 16px;
`;

export const RecommendedCourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
export const RecommendedCourseItem = styled.div`
  position: relative;
`;
export const RecommendedCourseItemImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;
export const RecommendedCourseItemText = styled.div`
  position: absolute;
  bottom: 4px;
  right: 10px;
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 16px;
`;

export const More = styled(Link)`
  color: #626262;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &:hover {
    color: #000;
  }
`;

export const AiourseWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AiourseText = styled.p`
  position: absolute;
  top: 111px;
  left: 17px;
  text-align: center;
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  b {
    font-weight: bold;
  }
`;

export const AiourseImg = styled.img`
  width: 147px;
  height: 242px;
  border-radius: 10px;
  opacity: 0.3;
`;

// place 정보 보기
export const SlideWrapper = styled.div`
  margin-top: 40px;
`;

export const MySwiper = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    position: relative;
    gap: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const SwiperSlideImg = styled.img`
  width: 184px;
  height: 105px;
  border-radius: 10px;
`;

export const SwiperSlideText = styled.div`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export const OverlayText = styled.div`
  position: absolute;
  left: 64px;
  color: #585858;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const OverlaySwiperSlideImg = styled.img`
  width: 184px;
  height: 105px;
  border-radius: 10px;
  opacity: 0.3;
`;
