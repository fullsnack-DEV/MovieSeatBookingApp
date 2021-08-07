//importing Action Types

import {
  ADDTOREMIND,
  REMOVEREMIND,
  GETDATES,
  GETTIME,
  GETSEAT,
} from "./ActionTypes";

//Add to Remind

export const addtoremind = (title, img, id, imdbrating) => {
  return {
    type: ADDTOREMIND,
    payload: {
      title: title,
      img: img,
      id: id,
      imdbrating: imdbrating,
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

export const getdates = (date, day) => {
  return {
    type: GETDATES,
    payload: {
      date,
      day,
    },
  };
};

export const gettime = (time) => {
  return {
    type: GETTIME,
    payload: {
      time,
    },
  };
};

//seat
export const getseat = (seat) => {
  return {
    type: GETSEAT,
    payload: {
      seat,
    },
  };
};
