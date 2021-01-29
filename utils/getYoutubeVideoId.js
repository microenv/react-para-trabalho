/**
 * Recebe uma url do youtube e retorna o ID do vídeo
 * https://stackoverflow.com/a/8260383/1791115
 *
 * @param {string} url
 */
export default function getYoutubeVideoId(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
