import React from "react";
import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Preview = (props) => {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Link para o Youtube</div>;
  }
  const id = getYouTubeId(url);
  return (
    <div>
      // 👇 Renders the default preview UI
      {renderDefault({ ...props, title: "Link do YouTube" })}
      // 👇 Renders the video preview below
      <LiteYouTubeEmbed id={id} />
    </div>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "Link do Youtube",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
