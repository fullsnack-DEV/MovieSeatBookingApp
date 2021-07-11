import React, { useState, useEffect } from "react";

const useApi = (apifunc) => {
  //state for loading
  const [Loading, SetLoading] = useState(false);
  //state for Error
  const [Error, SetError] = useState(false);
  //state for Data
  const [data, Setdata] = useState([]);

  //Requsting a data

  const Request = async () => {
    try {
      SetLoading(true);

      const response = await apifunc();

      Setdata(response.data.results);

      SetLoading(false);
    } catch (error) {
      SetError(error);
    }
  };

  return {
    data,
    Loading,
    Error,
    Request,
  };
};

export default useApi;
