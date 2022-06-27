import { ifElse, propEq, allPass, always } from "ramda";

const sidebarToggled = propEq("sidebarToggled", true);
const noError = propEq("error", false);
const notLoading = propEq("loading", false);

const shouldRenderPagination = allPass([sidebarToggled, noError, notLoading]);

export default shouldRenderPagination;
