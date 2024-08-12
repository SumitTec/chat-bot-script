"use client";

import { Button } from "@/ui-kit/Button";
import Input from "@/ui-kit/Input";
import React, { useState } from "react";

interface SearchComponentProps {
  reStyle?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ reStyle }) => {
  const [isSearchHome, setIsSearchHome] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchHome = async () => {
    setLoading(true);
    setIsSearchHome("");
    try {
      console.log("Searching for:", isSearchHome);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative w-full h-fit ${reStyle}`}>
      <Input
        name="search"
        type="text"
        id="search"
        value={isSearchHome}
        onChange={(e) => setIsSearchHome(e.target.value)}
        placeholder="8220 Oak Tree Vista, Hubbard, Ohio 44425..."
        restStyle="sm:pr-44 md:!h-16"
      />
      <div className="sm:w-fit w-full h-fit text-center target:text-right mt-3 sm:mt-0 sm:absolute right-10p top-2">
        <Button
          buttonType="button"
          text="Get estimate"
          className="px-6 !w-fit"
          onClick={handleSearchHome}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
