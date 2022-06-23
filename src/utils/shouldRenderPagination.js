import { ifElse, propEq, allPass, always } from "ramda";

const sidebarToggled = propEq("sidebarToggled", true);
const noError = propEq("error", null);
const notLoading = propEq("loading", false);

const shouldRenderPagination = ifElse(
  allPass([sidebarToggled, noError, notLoading]),
  always(true),
  always(false)
);

export default shouldRenderPagination;
