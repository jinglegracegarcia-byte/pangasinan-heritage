import React from "react";

export default function TextInput({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "search-input",
  ...rest
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
}