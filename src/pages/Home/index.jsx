import React, { useEffect, useState } from "react";
import Trending from "../../components/Sections/Trending";
import { Identifier, HomeContainer, SectionContainer } from "./Home.styles";
import * as api from "../../utils/api/api";
import { Banner } from "../../components/Banner";
import { BannerItem } from "../../components/Banner/BannerItem";
import Recent from "../../components/Sections/Recent";
import TopRated from "../../components/Sections/TopRated";
import { useIsMobile } from "../../hooks/useIsMobile";
import ContinueWatching from "../../components/ContinueWatching";
import { useAuth } from "../../contexts/AuthContext";
import AiringSchedule
 from "../../components/Sections/AiringSchedule";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  adaptiveHeight: false,
  arrows: true,
  dots: true,
};

function Home() {
  const { currentUser } = useAuth();
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    api.getPopular(1, 7).then((data) => {
      setPopular(data);
    });
  }, []);

  return (
    <HomeContainer>
      <Banner>
        {popular &&
          popular.map((res) => (
            <BannerItem
              key={res.id}
              {...res}
              to={`/anime/${res.id}/episode/1`}
            />
          ))}
      </Banner>
      {currentUser?.email ? (
        <SectionContainer>
          <Identifier>Continue Watching</Identifier>
          <ContinueWatching settings={settings} currentUser={currentUser} />
        </SectionContainer>
      ) : null}
      <SectionContainer>
        <Identifier>Recent Episodes</Identifier>
        <Recent perPage={7 * 4} settings={settings} />
      </SectionContainer>
      <SectionContainer>
        <Identifier>Trending</Identifier>
        <Trending perPage={7 * 3} settings={settings} />
      </SectionContainer>
      <SectionContainer>
        <Identifier>Top Rated</Identifier>
        <TopRated perPage={7 * 4} settings={settings} />
      </SectionContainer>
      <SectionContainer>
        <Identifier>Airing Schedule</Identifier>
        <AiringSchedule />
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
