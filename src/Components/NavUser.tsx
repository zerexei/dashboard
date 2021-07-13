import { useEffect, useState } from "react";
import axios from "axios";
import config from "../.config";

import { ChevronDownIcon } from "@heroicons/react/solid";

type UserProps = {
  avatar_url: string;
  name: string;
};

const NavUser = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const fetchedUser = await axios.get(
      "https://api.github.com/users/zerexei",
      {
        headers: {
          Authorization: `token ${config.api_key}`,
        },
      }
    );
    setUser(await fetchedUser.data);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-12 h-12">
          <img
            src={user.avatar_url}
            alt="User avatar"
            className="object-cover rounded"
          />
        </div>
        <h2 className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
          {user.name}
          <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
        </h2>
      </div>
    </div>
  );
};

export default NavUser;
