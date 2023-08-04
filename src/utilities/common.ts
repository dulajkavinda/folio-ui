import { IconSize } from "../components/icon/icon";
import { SizeTypes } from "../types";

const HTTP = "http://";
const HTTPS = "https://";

const shortenLabel = (label: string) => {
  return label.split(" ")[0];
};

const getIconSizeFromSize = (size: SizeTypes): IconSize => {
  switch (size) {
    case "small":
      return "3";
    case "large":
      return "5";
    default:
      return "4";
  }
};

const createLinkWithHttps = (link: string): string => {
  if (link.startsWith(HTTP) || link.startsWith(HTTPS)) {
    return link;
  }
  return `${HTTPS}${link}`;
};

const openWebpage = (url: string, newTab = false) => {
  if (newTab) {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
};

export { shortenLabel, getIconSizeFromSize, createLinkWithHttps, openWebpage };
