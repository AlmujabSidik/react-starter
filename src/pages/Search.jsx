import { Input } from "@/components/ui/input";
import { useState } from "react";

function Search({ onSearch, totalResults, text }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  function getResultText() {
    if (searchQuery.trim() === "") {
      return;
    }

    if (totalResults === 0) {
      return "Tidak ditemukan hasil pencarian";
    }

    return `Ditemukan ${totalResults} data dengan kata "${searchQuery}"`;
  }
  return (
    <div className="flex flex-col w-full gap-1 sm:max-w-md">
      <Input
        className="pl-4"
        placeholder={`Search ${text}...`}
        type="search"
        onChange={onSearchChange}
        value={searchQuery}
      />
      <small className="text-muted-foreground">{getResultText()}</small>
    </div>
  );
}

export default Search;
