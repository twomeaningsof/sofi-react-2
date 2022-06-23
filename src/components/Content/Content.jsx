import { cond, prop, T } from "ramda";
import Loading from "../Loading";
import Error from "../Error";
import Section from "../Section";

const Content = cond([
  [prop("loading"), Loading],
  [prop("error"), Error],
  [T, Section],
]);

export default Content;
