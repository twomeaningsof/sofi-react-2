import { ifElse, always } from "ramda";

let mini = true;

const toggleSidebar = (sidebar) => {
  ifElse(
    always(mini),
    () => {
      sidebar.style.width = "120px";
      mini = false;
    },
    () => {
      sidebar.style.width = "25px";
      mini = true;
    }
  )(sidebar);
};

export default toggleSidebar;
