import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../.config";

export interface RepoProps {
  id: number;
  html_url: string;
  name: string;
  description: string;
  updated_at: string;
}

const sortByUpdatedAt = (items: RepoProps[]) =>
  items.sort((a, b) => (b["updated_at"] > a["updated_at"] ? 1 : -1));

const Repositories = () => {
  const [repos, setRepos] = useState<RepoProps[]>([] as RepoProps[]);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const res = await axios.get(
      "https://api.github.com/users/zerexei/repos?page=1&per_page=12",
      {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      }
    );
    setRepos(await res.data);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {repos &&
        sortByUpdatedAt(repos).map((repo) => {
          return (
            <div key={repo.id} className="w-1/5 h-40 p-6 bg-gray-50">
              <a
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
  );
};

export default Repositories;
