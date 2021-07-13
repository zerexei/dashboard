import axios from "axios";
import config from "../../.config";

const Wiki = () => {
  const handleClick = async () => {
    const res = await axios.get("https://api.github.com/users/zerexei", {
      headers: {
        Authorization: `token ${config.api_key}`,
      },
    });
    console.log(res);
  };

  return (
    <div>
      <h2>Wiki</h2>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default Wiki;
