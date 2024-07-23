import { ColorButton } from "../../assets/warna/warna";

function Button(props) {
  const { title, className } = props;

  return (
    <button
      className={className}
      style={{ ...ColorButton.button, ...ColorButton.pfontStyle }}
    >
      {title}
    </button>
  );
}

export default Button;
