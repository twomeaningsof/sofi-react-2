import { ifElse, always } from "ramda";

const toggleSidebar = (sidebar, sidebarToggled, setSidebarToggled) =>
  ifElse(
    always(sidebarToggled),
    () => {
      setSidebarToggled(false);
      sidebar.style.width = "25px";
    },
    () => {
      setSidebarToggled(true);
      sidebar.style.width = "120px";
    }
  )();

export default toggleSidebar;
