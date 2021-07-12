import {
  ChevronDownIcon,
  ExclamationCircleIcon,
  AdjustmentsIcon,
  TagIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

function App() {
  return (
    <div className="min-h-screen max-h-screen p-6 px-12 bg-gray-50">
      <div className="flex items-stretch bg-white shadow-md ">
        {/* LEFT */}
        <div className="h-full w-1/6 p-2 text-white bg-green-700 rounded-l">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-3 border">Logo</div>
            <p className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
              <h1>Lorem Ipsum</h1>
              <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </p>
          </div>
          <nav className="flex flex-col">
            <a className="p-2 hover:bg-gray-200" href="#a">
              <p className="flex items-center gap-2">
                <CollectionIcon className="w-5 h-5 "></CollectionIcon>
                Dashboard
              </p>
            </a>
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
        </div>

        {/* RIGHT */}
        <div className="flex-1 p-2 rounded-r">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            optio fugiat non tempore doloribus temporibus qui nisi incidunt
            aperiam consectetur fugit reprehenderit maxime vitae, saepe velit.
            Debitis deleniti odit sint?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
