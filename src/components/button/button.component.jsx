import "./button.styles.scss";

function Button ({ children, ...otherProps }) {
	return (
		<button className="button-container" { ...otherProps } > { children } </button>
	)
}

export default Button;