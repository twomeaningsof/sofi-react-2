import { always } from "ramda";
import { Spinner } from "@chakra-ui/react";
import "./Loading.scss";

const Loading = always(
  <div>
    Loading <Spinner className="loading" />
  </div>
);

export default Loading;
