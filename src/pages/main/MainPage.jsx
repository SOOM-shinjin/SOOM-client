import React, { useRef, useState } from 'react';
import * as S from './style';
import LogoImg from '../../../public/images/logo.png';
import SearchImg from '../../../public/images/searchIcon.png';
import BannerImg1 from '../../../public/images/banner1.png';
import BikeImg from '../../../public/images/bike.png';
import DriveImg from '../../../public/images/drive.png';
import MountainImg from '../../../public/images/mountain.png';
import OceanImg from '../../../public/images/ocean.png';
import FriendImg from '../../../public/images/friend.png';
import PictureImg from '../../../public/images/picture.png';
import AiImg from '../../../public/images/ai.png';
import DummyImg1 from '../../../public/images/dummy/도깨비골.png';
import DummyImg2 from '../../../public/images/dummy/묵호항.png';

// 슬라이더 구현
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const MainPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.Header>
          <S.Logo src={LogoImg} />
          <S.SearchWrapper>
            <S.SearchInput placeholder="검색어를 입력하세요" />
            <S.SearchImg src={SearchImg} />
          </S.SearchWrapper>
        </S.Header>

        <S.Banner src={BannerImg1} />

        <S.CourseWrapper>
          <S.RecommendedCourseWrapper>
            <S.TitleWrapper>
              <S.Title>추천 여행 코스</S.Title>
              <S.More to={'/course'}>더보기</S.More>
            </S.TitleWrapper>

            <S.RecommendedCourseGrid>
              <S.RecommendedCourseItem>
                <S.RecommendedCourseItemImg src={BikeImg} />
                <S.RecommendedCourseItemText>
                  자전거
                </S.RecommendedCourseItemText>
              </S.RecommendedCourseItem>

              <S.RecommendedCourseItem>
                <S.RecommendedCourseItemImg src={DriveImg} />
                <S.RecommendedCourseItemText>
                  드라이브
                </S.RecommendedCourseItemText>
              </S.RecommendedCourseItem>

              <S.RecommendedCourseItem>
                <S.RecommendedCourseItemImg src={MountainImg} />
                <S.RecommendedCourseItemText>산</S.RecommendedCourseItemText>
              </S.RecommendedCourseItem>

              <S.RecommendedCourseItem>
                <S.RecommendedCourseItemImg src={OceanImg} />
                <S.RecommendedCourseItemText>바다</S.RecommendedCourseItemText>
              </S.RecommendedCourseItem>

              <S.RecommendedCourseItem>
                <S.RecommendedCourseItemImg src={FriendImg} />
                <S.RecommendedCourseItemText>친구</S.RecommendedCourseItemText>
              </S.RecommendedCourseItem>

              <S.RecommendedCourseItem>
                <S.RecommendedCourseItemImg src={PictureImg} />
                <S.RecommendedCourseItemText>사진</S.RecommendedCourseItemText>
              </S.RecommendedCourseItem>
            </S.RecommendedCourseGrid>
          </S.RecommendedCourseWrapper>

          <S.AiourseWrapper>
            <S.TitleWrapper>
              <S.Title>AI 여행 코스</S.Title>
            </S.TitleWrapper>
            <S.AiourseImg src={AiImg} />
            <S.AiourseText>
              <b>10초</b>만에 <b>나만의</b> <br />
              <b>여행 코스</b> 만들러가기
            </S.AiourseText>
          </S.AiourseWrapper>
        </S.CourseWrapper>

        {/* place 정보 보기 */}

        <S.SlideWrapper>
          <S.TitleWrapper>
            <S.Title>PLACE 정보 보기</S.Title>
            <S.More to="/place">더보기</S.More>
          </S.TitleWrapper>

          <S.MySwiper
            slidesPerView={1.7}
            centeredSlides={false}
            spaceBetween={20}
            grabCursor={true}
          >
            <SwiperSlide>
              <S.SwiperSlideImg src={DummyImg1} />
              <S.SwiperSlideText>도째비골 해랑전망대</S.SwiperSlideText>
            </SwiperSlide>

            <SwiperSlide>
              <S.SwiperSlideImg src={DummyImg2} />
              <S.SwiperSlideText>묵호항</S.SwiperSlideText>
            </SwiperSlide>

            <SwiperSlide>
              <S.SwiperSlideImg src={DummyImg1} />
              <S.SwiperSlideText>도째비골 해랑전망대</S.SwiperSlideText>
            </SwiperSlide>
          </S.MySwiper>
        </S.SlideWrapper>

        {/* 더 많은 여행지 보기 */}

        <S.SlideWrapper>
          <S.TitleWrapper>
            <S.Title>더 많은 여행지 보기</S.Title>
          </S.TitleWrapper>

          <S.MySwiper
            slidesPerView={1.7}
            centeredSlides={false}
            spaceBetween={20}
            grabCursor={true}
          >
            <SwiperSlide>
              <S.OverlaySwiperSlideImg src={DummyImg1} />
              <S.OverlayText>
                COMING
                <br /> SOON
              </S.OverlayText>
            </SwiperSlide>

            <SwiperSlide>
              <S.OverlaySwiperSlideImg src={DummyImg2} />
              <S.OverlayText>
                COMING
                <br /> SOON
              </S.OverlayText>
            </SwiperSlide>

            <SwiperSlide>
              <S.OverlaySwiperSlideImg src={DummyImg1} />
              <S.OverlayText>
                COMING
                <br /> SOON
              </S.OverlayText>
            </SwiperSlide>
          </S.MySwiper>
        </S.SlideWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
