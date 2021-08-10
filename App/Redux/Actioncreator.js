//importing Action Types

import {
  ADDTOREMIND,
  REMOVEREMIND,
  GETDATES,
  GETTIME,
  GETSEAT,
} from "./ActionTypes";

//Add to Remind

export const addtoremind = (title, img, id, imdbrating, information) => {
  return {
    type: ADDTOREMIND,
    payload: {
      title: title,
      img: img,
      id: id,
      imdbrating: imdbrating,
      information: information,
    },
  };
};

export const removeremind = (id) => {
  return {
    type: REMOVEREMIND,
    payload: {
      id: id,
    },
  };
};

//Dates

export const getdates = (date, day, title) => {
  return {
    type: GETDATES,
    payload: {
      date,
      day,
    },
  };
};

export const gettime = (time, title) => {
  return {
    type: GETTIME,
    payload: {
      time,
    },
  };
};

//seat
export const getseat = (seat, title) => {
  return {
    type: GETSEAT,
    payload: {
      seat,
      title,
    },
  };
};
