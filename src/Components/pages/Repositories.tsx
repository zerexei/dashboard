import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../.config";
import { Link } from "react-router-dom";

export interface RepoProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
}

/**
 *  Sort repos by updated_at property
 */
const sortByUpdatedAt = (items: RepoProps[]) =>
  items.sort((a, b) => (b["updated_at"] > a["updated_at"] ? 1 : -1));

const Repositories = () => {
  const [repos, setRepos] = useState<RepoProps[]>([] as RepoProps[]);

  useEffect(() => {
    getRepos().catch(console.dir);
  }, []);

  /**
   * Get all repositories of user
   */
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

  /**
   * JSX format of all repositories
   */
  const allRepos: JSX.Element[] = sortByUpdatedAt(repos).map(
    (repo: RepoProps) => {
      return (
        <div key={repo.id} className="w-1/5 h-40 p-6 bg-gray-50">
          <div className="flex justify-between items-center">
            <a
              href={repo.html_url}
              className="text-blue-400 hover:text-blue-500 hover:underline"
            >
              {repo.name}
            </a>

            <Link to={`/repos/${repo.name}`} className="text-xs">
              View
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-900">
            {repo?.description || "No description available"}
          </p>
        </div>
      );
    }
  );

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {repos.length > 0 ? allRepos : "No current repository"}
    </div>
  );
};

export default Repositories;
