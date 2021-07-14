import { useQuery } from "react-query";
import axios from "axios";
import config from "../../.config";

export interface GistProps {
  id: number;
  html_url: string;
}

const Gists = () => {
  const { isLoading, error, data } = useQuery<GistProps[], Error>(
    "gists",
    /**
     * Fetch all public gists
     */
    async () => {
      const result = await axios.get("https://api.github.com/gists/public", {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      });
      return await result.data;
    }
  );

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>{`An error has occured: ${error.message}`}</p>;
  if (!data || data.length <= 0) return <p>No current gist available</p>;

  return (
    <div className="flex flex-col gap-5">
      {data.map((gist: GistProps) => (
        <a
          key={gist.id}
          href={gist.html_url}
          className="hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          {gist.html_url}
        </a>
      ))}
    </div>
  );
};

export default Gists;
