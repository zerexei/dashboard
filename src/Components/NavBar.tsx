import { NavLink } from "react-router-dom";

import {
  ExclamationCircleIcon,
  AdjustmentsIcon,
  TagIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

// my repos
  // stats
  // issues
  // pr
// popular updated repos
// my gists
// all gists
// notifications
// /zen


const NavBar = () => {
  return (
    <nav className="flex flex-col">
      <NavLink
        to="/"
        exact
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <CollectionIcon className="w-5 h-5 "></CollectionIcon>
          Dashboard
        </p>
      </NavLink>
      
      <NavLink
        to="/repos"
        exact
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <CollectionIcon className="w-5 h-5 "></CollectionIcon>
          Repositories
        </p>
      </NavLink>
      



























      <NavLink
        to="/issues"
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <ExclamationCircleIcon className="w-5 h-5 "></ExclamationCircleIcon>
          Issues
        </p>
      </NavLink>
      <NavLink
        to="/pull-request"
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <AdjustmentsIcon className="w-5 h-5 "></AdjustmentsIcon>
          Pull Request
        </p>
      </NavLink>
      <NavLink
        to="/releases"
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <TagIcon className="w-5 h-5 "></TagIcon>
          Releases
        </p>
      </NavLink>
      <NavLink
        to="/wiki"
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <BookOpenIcon className="w-5 h-5 "></BookOpenIcon>
          Wiki
        </p>
      </NavLink>
      <NavLink
        to="/stats"
        activeClassName="bg-gray-200"
        className="p-2 hover:bg-gray-200"
      >
        <p className="flex items-center gap-2">
          <PresentationChartLineIcon className="w-5 h-5 "></PresentationChartLineIcon>
          Stats
        </p>
      </NavLink>
    </nav>
  );
};

export default NavBar;
