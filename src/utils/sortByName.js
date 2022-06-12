import { sort } from "ramda";

const sortByName = sort((a, b) =>
  a.name.toLowerCase() < b.name.toLowerCase()
    ? -1
    : b.name.toLowerCase() > a.name.toLowerCase()
    ? 1
    : 0
);

export default sortByName;
