import PropTypes from "prop-types";

const Button = ({ title, icon, font }) => (
  <div>
    <button
      className={`font-[${font}] bg-primaryColor text-textColor hover:bg-secondaryColor transition-all ease-in-out duration-200 font-semibold flex gap-2 items-center rounded-md px-6  py-2`}
    >
      {title}
      {icon}
    </button>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  font: PropTypes.string.isRequired, // Added 'font' prop validation
};

export default Button;
