//importing Action Types

import { ADDTOREMIND, REMOVEREMIND, GETDATES, GETTICKET } from "./ActionTypes";

//Add to Remind

export const addtoremind = (item) => {
  return {
    type: ADDTOREMIND,
    payload: {
      item,
    },
  };
};

export const removeremind = (id) => {
  return {
    type: REMOVEREMIND,
    payload: {
      id,
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

//time
export const getticketdata = (time, seats, price) => {
  return {
    type: GETTICKET,
    payload: {
      time,
      seats,
      price,
    },
  };
};
