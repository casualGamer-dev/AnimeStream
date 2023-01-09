import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";

import Loading from "../../Loading";
import Slider from "react-slick";

function TopRated({ page, perPage, settings }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getTopRated(page, perPage).then((data) => {
      setInfo(data);

      setLoading(false);
    });
  }, [page, perPage]);

  if (loading) return <Loading />;
  return (
    <Slider {...settings}>
      {info.map((item) => (
        <PostComponent
          isEpisode={true}
          key={`top-rated-${item.id}-${item.episodeNumber}`}
          {...item}
        />
      ))}
    </Slider>
  );
}

export default TopRated;
