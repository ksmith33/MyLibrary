import "./button.styles.scss";

const BUTTON_TYPES = {
	default: '',
	listItem: 'listItem'
}

function Button ({ children, buttonType,...otherProps}) {
	return (
		<button className={ `button-container ${ BUTTON_TYPES[buttonType] }` }{ ...otherProps } > { children } </button>
	)
}

export default Button;