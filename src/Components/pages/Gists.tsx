import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../.config";

export interface GistProps {
  id: number;
  html_url: string;
}

const Gists = () => {
  const [gists, setGists] = useState<GistProps[]>([] as GistProps[]);

  useEffect(() => {
    getAllGists();
  }, []);

  async function getAllGists() {
    const res = await axios.get("https://api.github.com/gists/public", {
      headers: {
        Authorization: `token ${config.api_key}`,
      },
    });
    setGists(await res.data);
  }

  const allGists = gists.map((gist) => (
    <a key={gist.id} href={gist.html_url} className="hover:text-blue-400">
      {gist.html_url}
    </a>
  ));

  return (
    <div className="flex flex-col gap-5">
      {gists.length > 0 ? allGists : "No current gist."}
    </div>
  );
};

export default Gists;
