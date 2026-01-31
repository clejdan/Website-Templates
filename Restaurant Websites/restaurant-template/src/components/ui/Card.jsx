import { useState } from 'react';

export default function Card({
  children,
  image,
  imageAlt = '',
  className = '',
  hover = true,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    boxShadow: isHovered && hover
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: isHovered && hover ? 'translateY(-8px)' : 'translateY(0)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: hover ? 'pointer' : 'default',
  };

  const imageContainerStyle = {
    aspectRatio: '4/3',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: isHovered && hover ? 'scale(1.08)' : 'scale(1)',
    transition: 'transform 0.4s ease',
  };

  const contentStyle = {
    padding: '1.5rem',
  };

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {image && (
        <div style={imageContainerStyle}>
          <img
            src={image}
            alt={imageAlt}
            style={imageStyle}
          />
        </div>
      )}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
}
