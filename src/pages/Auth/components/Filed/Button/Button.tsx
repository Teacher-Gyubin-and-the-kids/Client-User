import S from './Button.module.css';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  background?: string;
  size?: string;
  weight?: string;
}

export default function Button({
  type = "button",
  value,
  onClick,
  color = '#ffffff',
  background = '#00CC87',
  size = '28px',
  weight = 'bold'
}: ButtonProps) {

  return (
    <div className={S.wrapper}>
      <button
        type={type}
        onClick={onClick}
        style={{
          color: color,
          backgroundColor: background,
          fontSize: size,
          fontWeight: weight
        }}
      >
        {value}
      </button>
    </div>
  );
}