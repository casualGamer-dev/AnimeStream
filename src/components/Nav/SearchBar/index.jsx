import React, { useRef, useState,useEffect } from "react";
import { SearchBar, SearchButton, SearchContainer } from "./search.styles";
import { FaSearch } from "react-icons/fa";
import SearchOutput from "./SearchOutput";
import useClickOutside from "../../../hooks/useClickOutside";
import * as api from "../../../utils/api/api";
import { SearchOutputContainer } from "./SearchOutput/SearchOutput.styles";

function Search() {
  const SearchBarRef = useRef();
  const [animeOutput, setAnimeOutput] = useState([]);
  const page = 1;
  const ref = useRef();
  const perPage = 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    const SearchBarText = SearchBarRef.current.value;
    if (SearchBarText.length < 3) {
      setAnimeOutput([]);
      return false;
    }
    api
      .getSearch(SearchBarText, page, perPage)
      .then((res) => setAnimeOutput(res));
    
  };

  const handleRemove = (e) => {
    setAnimeOutput([]);
    setMangaOutput([]);
    SearchBarRef.current.value = "";
  };
useEffect(() => {
  setTimeout(() => { 
     const SearchBarText = SearchBarRef.current.value;
    if (SearchBarText.length < 1) {
      setAnimeOutput([]);
      return false;
    }
    api
      .getSearch(SearchBarText, page, perPage)
      .then((res) => setAnimeOutput(res));}, 1600);   
}, [animeOutput]);

useClickOutside(SearchBarRef, () => {

  SearchBarRef.current.value = "";
});
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBar type="search" ref={SearchBarRef} />
      <SearchButton>
        <FaSearch />
      </SearchButton>
      <SearchOutputContainer
        className={
          animeOutput.length < 1 ? "hide" : "show"
        }
      >
        <SearchOutput data={animeOutput} onClick={handleRemove} />
      </SearchOutputContainer>
    </SearchContainer>
  );
}

export default Search;
