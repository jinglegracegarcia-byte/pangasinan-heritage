import React from "react";
import TextInput from "../atoms/TextInput";
import SearchIcon from "./SearchIcon";

export default function SearchBar({ value, onChange, placeholder = "Search heritage sites..." }) {
  return (
    <div className="search-bar">
      <span className="search-icon" aria-hidden="true">
        <SearchIcon />
      </span>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
}