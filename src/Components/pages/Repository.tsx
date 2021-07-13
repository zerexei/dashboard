import axios from "axios";
import config from "../../.config";

const Repository = () => {
  const handleClick = async () => {
    const res = await axios.get(
      "https://api.github.com/notifications",
      {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      }
    );
    console.log(res.data);
  };

  const getLanguages = async () => {
    const res = await axios.get(
      "https://api.github.com/repos/zerexei/dashboard/languages",
      {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      }
    );
    return Object.keys(res.data);
  };

  return (
    <div>
      <button onClick={handleClick}>Repo</button>
    </div>
  );
};

export default Repository;
