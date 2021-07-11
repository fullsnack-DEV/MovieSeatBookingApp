import { create } from "axios";

const Fetchdata = (extension) =>
  create({
    baseURL: `https://api.themoviedb.org/3/${extension}`,
  });

export default Fetchdata;
