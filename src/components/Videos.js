import { Box, Stack } from "@mui/system";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  console.log(videos);
  console.log(direction);
  if (!videos?.length) return "loading...";
  return (
    <Stack
      direction={direction || "raw"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
