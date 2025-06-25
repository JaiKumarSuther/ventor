interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  gradient?: string;
  hoverGradient?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;  // ✅ Added disabled prop
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  onClick,
  gradient = "linear-gradient(0deg, #5A43C6, #8761FF)",
  hoverGradient = "linear-gradient(0deg, #4A36B0, #765FE0)",
  className = "",
  style = {},
  disabled = false, // ✅ Default to false if not provided
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}  // ✅ Disable onClick when disabled is true
      className={`rounded-full cursor-pointer font-[600] text-sm text-black px-3 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} // ✅ Add styles for disabled state
      style={{
        background: gradient,
        ...style,  // Spread additional styles like width and height
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.background = hoverGradient;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.background = gradient;
        }
      }}
      disabled={disabled}  // ✅ Add disabled attribute
    >
      {label}
    </button>
  );
};

export default GradientButton;
