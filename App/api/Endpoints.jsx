import Fetchdata from "./Client";

const getmovies = () =>
  Fetchdata("movie").get(
    `/popular?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

const getnowplaying = () =>
  Fetchdata("movie").get(
    `/now_playing?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

const getupcoming = () =>
  Fetchdata("movie").get(
    `/upcoming?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

export { getmovies, getnowplaying, getupcoming };
