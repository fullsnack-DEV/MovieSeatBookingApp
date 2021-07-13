import React, { useState, useEffect, useCallback } from "react";

const useApi = (apifunc) => {
  //state for loading
  const [Loading, SetLoading] = useState(false);
  //state for Error
  const [Error, SetError] = useState(false);
  //state for Data
  const [data, Setdata] = useState([]);

  //Requsting a data

  useEffect(() => {
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

    Request();
  }, []);

  return {
    data,
    Loading,
    Error,
  };
};

export default useApi;
