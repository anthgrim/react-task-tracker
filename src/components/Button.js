import PropTypes from "prop-types";

const Button = ({ color, text, action }) => {
  const buttonStyles = {
    backgroundColor: color,
  };

  return (
    <button onClick={action} style={buttonStyles} className="btn">
      {text}
    </button>
  );
};

//Default Properties for the component
Button.defaultProps = {
  text: "Button",
  color: "black",
};

//Type Of definition for the component
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
