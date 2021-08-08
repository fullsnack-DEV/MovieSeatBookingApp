//importing ActionTypes
import {
  ADDTOREMIND,
  GETDATES,
  REMOVEREMIND,
  GETTIME,
  GETSEAT,
} from "./ActionTypes";

const intialState = {
  fav: [],
  dates: [],
  time: [],
  seat: [],
};

export const mainreducer = (state = intialState, action) => {
  if (action.type === ADDTOREMIND) {
    return {
      ...state,
      fav: state.fav.concat({
        title: action.payload.title,
        img: action.payload.img,
        id: action.payload.id,
        imdbrating: action.payload.imdbrating,
      }),
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
        {
          date: action.payload.date,
          day: action.payload.day,
          title: action.payload.title,
        },
      ],
    };
  } else if (action.type === GETTIME) {
    return {
      ...state,
      time: [
        {
          time: action.payload.time,
        },
      ],
    };
  } else if (action.type === GETSEAT) {
    return {
      ...state,
      seat: [
        {
          seat: action.payload.seat,
        },
      ],
    };
  } else {
    return state;
  }
};
