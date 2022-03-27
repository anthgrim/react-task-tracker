import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={headingStyles}>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "#c9184a" : "#001219"}
        action={onAdd}
      ></Button>
    </header>
  );
};

//Set default properties for the component
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//For in-line styling
const headingStyles = {
  color: "#001219",
};

export default Header;
