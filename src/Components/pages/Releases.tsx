import axios from "axios";
import React from "react";
import config from "../../.config";

const Releases = () => {
  const handleClick = async () => {
    const res = await axios.get("https://api.github.com/users/zerexei/events", {
      headers: {
        Authorization: `token ${config.api_key}`,
      },
    });
    console.log(res);
  };
  return (
    <div>
      <h2>Releases</h2>
      <button onClick={handleClick}>Events</button>
    </div>
  );
};

export default Releases;
