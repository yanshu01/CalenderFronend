import left from "../src/assets/chevron_left_24dp_000000_FILL0_wght700_GRAD0_opsz24.png";
import right from "../src/assets/chevron_right_24dp_000000_FILL0_wght700_GRAD0_opsz24.png";

function App() {
  return (
    <div className="bg-gray-200 h-[900px] w-[1500px] flex">
      <div>
        <div className="rounded-md bg-white h-[500px] w-[300px] mt-32 ml-[50px] overflow-hidden drop-shadow-lg">
          <h1 className="font-semibold text-sm ml-9 mt-12 flex items-center">
            
            October 2024
            <img src={left} alt="chevron left" className="ml-[100px] w-4 h-4" />
            <img src={right} alt="chevron right" className=" w-4 h-4" />
          </h1>

          {/* Days of the week */}
          <ul className="flex space-x-[22px] list-none p-0 text-sm ml-9 mt-6 font-medium">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>St</li>
            <li>Su</li>
          </ul>

          {/* Calendar dates with reduced gap and hover effect */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm ml-9 mt-4 font-thin">
            {/* Loop through dates */}
            {Array.from({ length: 31 }, (_, index) => (
              <div
                key={index}
                className="group relative w-6 h-6 flex items-center justify-center"
              >
                <span className="group-hover:bg-red-500 group-hover:text-white group-hover:rounded-full w-full h-full flex items-center justify-center transition-colors duration-300 ease-in-out">
                  {index + 1}
                </span>
              </div>
            ))}
            
          </div>
          <h1 className="text-[10px] font-thin ml-9 mt-6">
          8 AM
          </h1>
          <h1 className="text-sm ml-9">
            Breakfast
          </h1>
          <h1 className="text-[10px] font-thin ml-9 mt-4">
          10 AM
          </h1>
          <h1 className="text-sm ml-9">
            Travel to venue
          </h1>
          <h1 className="text-[10px] font-thin ml-9 mt-4">
          10:30 AM
          </h1>
          <h1 className="text-sm ml-9">
            Ceromany
          </h1>
        </div>
      </div>
      <div className="rounded-md bg-black text-white h-[420px] w-[300px] mt-32 ml-[50px] overflow-hidden drop-shadow-lg">
          <h1 className="font-semibold text-sm ml-9 mt-12 flex items-center">
            
            October 2024
            <img src={left} alt="chevron left" className="ml-[100px] w-4 h-4" />
            <img src={right} alt="chevron right" className=" w-4 h-4" />
          </h1>

          {/* Days of the week */}
          <ul className="flex space-x-[22px] list-none p-0 text-sm ml-9 mt-6 font-medium">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>St</li>
            <li>Su</li>
          </ul>

          {/* Calendar dates with reduced gap and hover effect */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm ml-9 mt-4 font-thin">
            {/* Loop through dates */}
            {Array.from({ length: 31 }, (_, index) => (
              <div
                key={index}
                className="group relative w-6 h-6 flex items-center justify-center"
              >
                <span className="group-hover:bg-green-700 group-hover:text-white group-hover:rounded-full w-full h-full flex items-center justify-center transition-colors duration-300 ease-in-out">
                  {index + 1}
                </span>
              </div>
            ))}
            
          </div>
          <h1 className="text-[10px] font-thin ml-9 mt-6">
          8 AM
          </h1>
          <h1 className="text-sm ml-9">
            Breakfast
          </h1>
          <h1 className="text-[10px] font-thin ml-9 mt-4">
          10 AM
          </h1>
          <h1 className="text-sm ml-9">
            Travel to venue
          </h1>
          
        </div>
    </div>
  );
}

export default App;
