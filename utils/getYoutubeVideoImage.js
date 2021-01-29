import getYoutubeVideoId from "./getYoutubeVideoId";

export const YoutubeResolution = {
  default: "default",
  mq: "mqdefault",
  hq: "hqdefault",
  sd: "sddefault",
  maxres: "maxresdefault",
};

export default function getYoutubeVideoImage(
  url_or_id,
  resolution = YoutubeResolution.default
) {
  const id =
    url_or_id.indexOf("https") === 0 ? getYoutubeVideoId(url_or_id) : url_or_id;

  if (!id) return "";

  return `https://img.youtube.com/vi/${id}/${resolution}.jpg`;
}
