import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Base styles for variant colors
  const variantColors = {
    primary: {
      base: { backgroundColor: '#8B4513', color: '#FFFFFF' },
      hover: { backgroundColor: '#6B3410', color: '#FFFFFF' },
    },
    secondary: {
      base: { backgroundColor: '#2C3E50', color: '#FFFFFF' },
      hover: { backgroundColor: '#1A252F', color: '#FFFFFF' },
    },
    accent: {
      base: { backgroundColor: '#D4AF37', color: '#2C3E50' },
      hover: { backgroundColor: '#B8960F', color: '#2C3E50' },
    },
    outline: {
      base: { backgroundColor: 'transparent', color: '#8B4513', border: '2px solid #8B4513' },
      hover: { backgroundColor: '#8B4513', color: '#FFFFFF', border: '2px solid #8B4513' },
    },
    ghost: {
      base: { backgroundColor: 'transparent', color: '#8B4513' },
      hover: { backgroundColor: 'rgba(139, 69, 19, 0.1)', color: '#8B4513' },
    },
  };

  const sizeStyles = {
    sm: { padding: '0.625rem 1.25rem', fontSize: '0.8rem' },
    md: { padding: '0.875rem 1.75rem', fontSize: '0.875rem' },
    lg: { padding: '1rem 2rem', fontSize: '1rem' },
  };

  const colors = variantColors[variant] || variantColors.primary;
  const currentColors = isHovered && !disabled ? colors.hover : colors.base;

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    // Hover effects
    transform: isHovered && !disabled ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isHovered && !disabled
      ? '0 4px 12px rgba(0, 0, 0, 0.15)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.25s ease',
    // Merge colors and sizes
    ...currentColors,
    ...(sizeStyles[size] || sizeStyles.md),
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link
        to={to}
        className={className}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
