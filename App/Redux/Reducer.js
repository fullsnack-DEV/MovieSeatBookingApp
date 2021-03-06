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
  dates: [
    {
      date: 20,
      day: "Thu",
    },
  ],
  time: [
    {
      time: null,
      title: null,
    },
  ],
  seat: [
    {
      seat: null,
      title: null,
    },
  ],
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
        information: action.payload.information,
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
          title: action.payload.title,
        },
      ],
    };
  } else {
    return state;
  }
};
