import { css } from "@emotion/react";
import { colors, fontSize } from "@Constants/styles";

export const style = css`
  .cf::before,
  .cf::after {
    content: " ";
    display: table;
  }

  .cf::after {
    clear: both;
  }

  .cf {
    *zoom: 1;
  }

  .menu,
  .submenu {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .menu {
    margin: 0 auto;
    width: auto;
    width: fit-content;
  }

  .menu > li {
    background: ${colors.Gray400};
    float: left;
    position: relative;
    transform: skewX(25deg);
  }

  .menu a {
    display: block;
    color: ${colors.White};
    text-decoration: none;
    font-size: ${fontSize.M};
  }

  .menu > li > a {
    transform: skewX(-25deg);
    padding: 1em 2em;
  }

  /* Dropdown */
  .submenu,
  .submenu li {
    opacity: 0;
    visibility: hidden;
  }

  .submenu {
    position: absolute;
    width: 12.5rem;
    left: 50%;
    margin-left: -6.25rem;
    transform: skewX(-25deg);
    transform-origin: left top;
  }

  .submenu li {
    background-color: ${colors.Gray600};
    position: relative;
    overflow: hidden;
    transition: 0.2s ease transform;
  }

  .submenu > li > a {
    padding: 1em 2em;
  }

  .submenu > li::after {
    content: "";
    position: absolute;
    top: -125%;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 3.125rem rgba(0, 0, 0, 0.9);
  }

  /* Odd stuff */
  .submenu > li:nth-of-type(odd) {
    transform: skewX(-25deg) translateX(0);
  }

  .submenu > li:nth-of-type(odd) > a {
    transform: skewX(25deg);
  }

  .submenu > li:nth-of-type(odd)::after {
    right: -50%;
    transform: skewX(-25deg) rotate(3deg);
  }

  /* Even stuff */
  .submenu > li:nth-of-type(even) {
    transform: skewX(25deg) translateX(0);
  }

  .submenu > li:nth-of-type(even) > a {
    transform: skewX(-25deg);
  }

  .submenu > li:nth-of-type(even)::after {
    left: -50%;
    transform: skewX(25deg) rotate(3deg);
  }

  /* Hover */
  .menu li:hover {
    background: ${colors.Blue};
  }

  .menu > li:hover .submenu,
  .menu > li:hover .submenu li {
    opacity: 1;
    visibility: visible;
  }

  .menu > li:hover .submenu li:nth-of-type(even) {
    transform: skewX(25deg) translateX(0.2rem);
  }

  .menu > li:hover .submenu li:nth-of-type(odd) {
    transform: skewX(-25deg) translateX(-0.2rem);
  }
`;
