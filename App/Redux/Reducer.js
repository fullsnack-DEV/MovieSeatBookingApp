//importing ActionTypes
import { ADDTOREMIND, GETTICKET, GETDATES, REMOVEREMIND } from "./ActionTypes";

const intialState = {
  fav: [],
  dates: [{ date: null, day: null }],
  ticket: [{ time: null, seats: null, price: null }],
};

export const mainreducer = (state = intialState, action) => {
  if (action.type === ADDTOREMIND) {
    return {
      ...state,
      fav: [
        ...state.fav,
        {
          title: action.payload.item.title,
        },
      ],
    };
  } else if (action.type === REMOVEREMIND) {
    return {
      ...state,
      fav: state.fav.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === GETDATES) {
    return {
      ...state,
      dates: [
        ...state.dates,
        {
          date: action.payload.date,
          day: action.payload.day,
        },
      ],
    };
  } else if (action.type === GETTICKET) {
    return {
      ...state,
      ticket: [
        ...state.ticket,
        {
          time: action.payload.time,
          seats: action.payload.seats,
          price: action.payload.price,
        },
      ],
    };
  }
};
