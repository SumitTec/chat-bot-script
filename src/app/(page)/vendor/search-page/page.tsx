import SearchComponent from "@/components/SearchComponent";
import TitleTextComponent from "@/components/TitleTextComponent";
import React from "react";

const SearchPage = () => {
  return (
    <div className="bg-bgGray w-full h-screen xl:px-0 sm:px-10 px-5 flex items-center justify-center">
      <div className="xl:max-w-screen-lg w-full bg-bgImage bg-cover bg-no-repeat bg-center rounded-md">
        <div className="bg-black bg-opacity-60 w-full h-full mobile:py-16 py-8 sm:px-16 mobile:px-8 px-5 rounded-md">
          <TitleTextComponent
            title="Find out what your home is worth"
            reStyle="pb-5 lg:w-500 md:w-96 mobile:w-80"
          />
          <SearchComponent />
          <div className="flex gap-5 justify-between md:items-center items-start mt-5">
            <p className="sm:text-base text-xs italic font-normal font-openSans text-white">
              Get a free home valuation in less than 2 min.
            </p>
            <p className="text-10p italic font-normal font-openSans text-white underline">
              Valuation provided by Wise Pelican
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
