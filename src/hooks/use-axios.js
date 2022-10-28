import { useState, useCallback } from 'react';
import axios from 'axios';


axios.defaults.baseURL =  `https://upayments-studycase-api.herokuapp.com/api`;

const useAxios = () => {
  let access_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNmbmRhNzg2QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9waW5rZXNoY2hvdWRoYXJ5IiwiaWF0IjoxNjYzMDk4MTkxLCJleHAiOjE2NjM1MzAxOTF9.m89Kv0PPfwOhnUE_jkUUi6dULS4nKO7JbzLzLs_c88w`;

  const [error, setError] = useState(null);

  const [loading, setloading] = useState(false);

  const sendRequest = useCallback((requestConfig, applyData) => {
    setloading(true);

    let headers = null;
    let urlVal = null;
  
      headers = {
        Authorization: `Bearer ${access_token}`,
      };
      urlVal = requestConfig.url;
    
    axios({
      method: requestConfig.method,
      url: urlVal,
      data: requestConfig.data ? requestConfig.data : null, 
      headers: headers,
    })
      .then((res) => {
        //setResponse(res.data);
        applyData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, loading, sendRequest };
};

export default useAxios;
