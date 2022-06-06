let mini = true;

const toggleSidebar = () => {
  const sidePanel = document.getElementById("side-panel");
  const buttonAside = document.getElementsByClassName("button--aside");
  if (mini) {
    sidePanel.style.width = "200px";
    [...buttonAside].map((button) => {
      button.classList.remove("hidden");
    });
    mini = false;
  } else {
    sidePanel.style.width = "20px";
    [...buttonAside].map((button) => {
      button.classList.add("hidden");
    });
    mini = true;
  }
};

export default toggleSidebar;
