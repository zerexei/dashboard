import { ChevronDownIcon } from "@heroicons/react/solid";

const NavUser = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-3 border">Logo</div>
        <p className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
          <h1>Lorem Ipsum</h1>
          <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
        </p>
      </div>
    </div>
  );
};

export default NavUser;
