import { CheckCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const Videodetail = () => {
  const { id } = useParams();
  const [videos, setvideos] = useState([]);
  const [video, setvideo] = useState();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideo(data.items[0])
    );
    fetchFromAPI(
      `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`
    ).then((data) => setvideos(data.items));
  }, [id]);
  if (!video?.snippet) {
    return "loading...";
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;
  console.log(videos);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "100px" }}>
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="black" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "black" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  sx={{ color: "black" }}
                  color="black"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                    color: "black",
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, color: "black" }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={{ md: 2, xs: 0 }}
          py={{ md: 3, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Videodetail;
