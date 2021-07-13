import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../.config";

export interface RepoProps {
  id: number;
  html_url: string;
  name: string;
  stargazers_count: number;
}

function Trendy() {
  const [repos, setRepos] = useState<RepoProps[]>([] as RepoProps[]);

  useEffect(() => {
    getAllTrendingRepositories();
  }, []);

  /**
   * TODO: dynamic date
   * Fetch all trending repositories
   */
  async function getAllTrendingRepositories() {
    const res = await axios.get(
      "https://api.github.com/search/repositories?q=language:javascript+created:2021-07-11&sort=stars",
      {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      }
    );
    setRepos(await res.data.items);
  }

  /**
   * JSX formal of repos
   */
  const allRepos = repos.map((repo) => (
    <p key={repo.id}>
      {repo.name} - stars: {repo.stargazers_count}
    </p>
  ));

  return (
    <div className="flex flex-col gap-5">
      {repos.length > 0 ? allRepos : "No current repo"}
    </div>
  );
}

export default Trendy;
