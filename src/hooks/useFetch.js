import React from "react";

const useFetch = (searchText) => {
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    if (searchText.length >= 3) {
      const apiUrl = `https://api.pexels.com/v1/search?query=${searchText}`;
      const options = {
        headers: {
          'Authorization': "aqQ1OpfJ7rpd7PK5uepkh7yFAlrbVqWi7uW68scx3xb0ohM3yIpfa2vl"
        }
      };

      fetch(apiUrl, options)
        .then(data => data.json())
        .then(dataParsed => setInfo(dataParsed));
    } else {

      setInfo(null);
    }
  }, [searchText]);

  return [info];
}

export default useFetch;
