import { sortBy, toLower, pipe, prop } from "ramda";

const sortByName = sortBy(pipe(prop("name"), toLower));

export default sortByName;
