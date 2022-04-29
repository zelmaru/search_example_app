import { useEffect, useState } from "react";
import Entry from "../models/Entry";
import EntryForSearch from "../models/EntryForSearch";

export default function useSearch(data: Entry[]) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const joinAllProperties = (entry: Entry): EntryForSearch => {
    const newEntry = {
      id: entry.id,
      joinedText: Object.values(entry).join(" ").toString()
    };
    return newEntry;
  };

  const searchedEntries = data.map((entry) => joinAllProperties(entry));

  const [entriesAfterSearch, setEntriesAfterSearch] = useState(searchedEntries);

  useEffect(() => {
    setEntriesAfterSearch(
      searchedEntries.filter((entry) =>
        entry.joinedText.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, searchedEntries]);

  const searchResults =
    entriesAfterSearch.map((foundEntry) =>
      data.find((entry) => foundEntry.id === entry.id)
    ) || [];

  return {
    searchTerm,
    setSearchTerm,
    searchResults
  };
}
