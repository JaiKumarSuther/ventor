interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  gradient?: string;
  hoverGradient?: string;
  className?: string;
  style?: React.CSSProperties; // ✅ Added optional style prop
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  onClick,
  gradient = "linear-gradient(0deg, #5A43C6, #8761FF)",
  hoverGradient = "linear-gradient(0deg, #4A36B0, #765FE0)",
  className = "",
  style = {}, // ✅ Default to empty object
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full cursor-pointer text-sm text-white px-3 ${className}`}
      style={{
        background: gradient,
        ...style, // ✅ Spread additional styles like width and height
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = hoverGradient;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = gradient;
      }}
    >
      {label}
    </button>
  );
};

export default GradientButton;
