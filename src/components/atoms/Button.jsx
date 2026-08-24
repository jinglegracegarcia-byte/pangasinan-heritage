import React from "react";


export default function Button({
  variant = "primary",
  active = false,
  className = "",
  children,
  ...rest
}) {
  const variantClass =
    {
      nav: "nav-link",
      icon: "icon-btn",
      primary: "view-details-btn",
      outline: "load-more-btn",
    }[variant] || "";

  const activeClass = active && variant === "nav" ? "nav-link-active" : "";

  const classes = [variantClass, activeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
