import "./button.styles.scss";

const BUTTON_TYPES = {
	default: 'default',
	listItem: 'listItem',
	icon: 'icon'
}

function Button ({ children, buttonType, pressed,...otherProps}) {
	return (
		<button className={ `button-container ${ BUTTON_TYPES[buttonType] } ${pressed ? 'pressed' : ''}` }{ ...otherProps } > { children } </button>
	)
}

export default Button;