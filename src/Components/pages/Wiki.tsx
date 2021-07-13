import axios from "axios";
import { useState } from "react";
import config from "../../.config";

type RepoProps = {
  id: number;
  html_url: string;
  name: string;
  description: string;
  updated_at: string;
};

const Wiki = () => {
  const [repos, setRepos] = useState<RepoProps[]>([] as RepoProps[]);

  const sortByUpdatedAt = (items: RepoProps[]) =>
    items.sort((a, b) => (b["updated_at"] > a["updated_at"] ? 1 : -1));

  const handleClick = async () => {
    const res = await axios.get(
      "https://api.github.com/users/zerexei/repos?page=1&per_page=12",
      {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      }
    );
    setRepos(await res.data);
    console.log(repos);
  };

  return (
    <div>
      <h2>Wiki</h2>
      <button onClick={handleClick}>Button</button>

      <div className="flex flex-wrap justify-center gap-2">
        {repos &&
          sortByUpdatedAt(repos).map((repo) => {
            return (
              <div className="w-1/5 h-40 p-6 bg-gray-50">
                <a
                  key={repo.id}
                  href={repo.html_url}
                  className="text-blue-400 hover:text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
                <p className="mt-4 text-sm text-gray-900">
                  {repo?.description || "No description available"}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wiki;
