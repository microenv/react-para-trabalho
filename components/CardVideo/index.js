import React from "react";
import getYoutubeVideoImage, {
  YoutubeResolution,
} from "../../utils/getYoutubeVideoImage";
import * as S from "./styles";

export default function CardVideo({ title, description, youtubeId }) {
  return (
    <S.Wrapper
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="nofollow"
    >
      <S.Thumbnail
        src={getYoutubeVideoImage(youtubeId, YoutubeResolution.mq)}
      />
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
