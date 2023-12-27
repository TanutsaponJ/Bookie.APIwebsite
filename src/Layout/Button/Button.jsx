import PropTypes from "prop-types";

const Button = ({ title, icon, font, onClick, active }) => (
  <div>
    <button
      onClick={onClick}
      className={`font-[${font}] ${
        active ? "bg-red-500" : "bg-gray-500"
      } bg-primaryColor text-textColor hover:bg-secondaryColor transition-all ease-in-out duration-200 font-semibold flex gap-2 items-center rounded-md px-6  py-2`}
    >
      {title}
      {icon}
    </button>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  font: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Added 'onClick' prop validation
  active: PropTypes.bool, // Added 'font' prop validation
};

export default Button;
