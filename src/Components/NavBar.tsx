import { NavLink } from "react-router-dom";

import {
  ExclamationCircleIcon,
  AdjustmentsIcon,
  TagIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <nav className="flex flex-col">
      <NavLink className="p-2 hover:bg-gray-200" to="/">
        <p className="flex items-center gap-2">
          <CollectionIcon className="w-5 h-5 "></CollectionIcon>
          Dashboard
        </p>
      </NavLink>
      <a className="p-2 hover:bg-gray-200" href="#a">
        <p className="flex items-center gap-2">
          <ExclamationCircleIcon className="w-5 h-5 "></ExclamationCircleIcon>
          Issues
        </p>
      </a>
      <a className="p-2 hover:bg-gray-200" href="#a">
        <p className="flex items-center gap-2">
          <AdjustmentsIcon className="w-5 h-5 "></AdjustmentsIcon>
          Pull Request
        </p>
      </a>
      <a className="p-2 hover:bg-gray-200" href="#a">
        <p className="flex items-center gap-2">
          <TagIcon className="w-5 h-5 "></TagIcon>
          Releases
        </p>
      </a>
      <a className="p-2 hover:bg-gray-200" href="#a">
        <p className="flex items-center gap-2">
          <BookOpenIcon className="w-5 h-5 "></BookOpenIcon>
          Wiki
        </p>
      </a>
      <a className="p-2 hover:bg-gray-200" href="#a">
        <p className="flex items-center gap-2">
          <PresentationChartLineIcon className="w-5 h-5 "></PresentationChartLineIcon>
          Stats
        </p>
      </a>
    </nav>
  );
};

export default NavBar;
