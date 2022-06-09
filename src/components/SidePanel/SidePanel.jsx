import "./SidePanel.scss";

const SidePanel = ({ children, ...props }) => {
  return (
    <aside className="side-panel" id="side-panel" {...props}>
      {children}
    </aside>
  );
};

export default SidePanel;
