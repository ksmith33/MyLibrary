import "./button.styles.scss";

const BUTTON_TYPES = {
	default: 'default',
	listItem: 'listItem',
	icon: 'icon'

}

function Button ({ children, buttonType,...otherProps}) {
	return (
		<button className={ `button-container ${ BUTTON_TYPES[buttonType] }` }{ ...otherProps } > { children } </button>
	)
}

export default Button;