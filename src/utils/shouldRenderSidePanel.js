import { propEq, allPass, not, isEmpty, prop } from "ramda";

const fetchedPlayers = (players) => prop("players")(players) |> isEmpty |> not;
const noError = propEq("error", false);
const notLoading = propEq("loading", false);

const shouldRenderSidePanel = allPass([fetchedPlayers, noError, notLoading]);

export default shouldRenderSidePanel;
