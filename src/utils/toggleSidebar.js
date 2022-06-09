let mini = true;

const toggleSidebar = (sidebar) => {
  if (mini) {
    sidebar.style.width = "120px";
    mini = false;
  } else {
    sidebar.style.width = "25px";
    mini = true;
  }
};

export default toggleSidebar;
