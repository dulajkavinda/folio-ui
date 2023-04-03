import { SizeTypes } from "../types";

function shortenLabel(label: string) {
  return label.split(" ")[0];
}

function getIconSizeFromSize(size: SizeTypes) {
  switch (size) {
    case "small":
      return "3";
    case "large":
      return "5";
    default:
      return "4";
  }
}

// eslint-disable-next-line import/prefer-default-export
export { shortenLabel, getIconSizeFromSize };
