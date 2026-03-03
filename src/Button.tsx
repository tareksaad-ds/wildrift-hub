import "./Button.css";

interface ButtonProps {
  /** The text label displayed inside the button */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** HTML button type attribute */
  type?: "button" | "submit" | "reset";
  /** Visual style variant */
  variant?: "primary" | "secondary";
  /** Whether the button is disabled */
  disabled?: boolean;
}

/**
 * Reusable Button component for the Tikoo Hub app.
 *
 * Renders a styled button with primary (gold fill) or secondary (outlined)
 * variants, fully accessible disabled state, and proper ARIA attributes.
 *
 * @param props - ButtonProps
 * @returns A styled accessible button element
 */
export function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`tikoo-btn tikoo-btn--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
}
