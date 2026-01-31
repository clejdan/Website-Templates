import { useState } from 'react';
import menuData from '../../content/menu.json';

const dietaryIcons = {
  vegetarian: { emoji: '🌱', colorClass: 'bg-green-100 text-green-700' },
  vegan: { emoji: '🌿', colorClass: 'bg-green-100 text-green-700' },
  glutenFree: { emoji: '🌾', colorClass: 'bg-amber-100 text-amber-700' },
  nutFree: { emoji: '🥜', colorClass: 'bg-orange-100 text-orange-700' },
  dairyFree: { emoji: '🧈', colorClass: 'bg-yellow-100 text-yellow-700' },
  spicy: { emoji: '🌶️', colorClass: 'bg-red-100 text-red-700' },
  chefsPick: { emoji: '⭐', colorClass: 'bg-accent/20 text-accent-dark' },
};

export default function DietaryIcon({ type, showLabel = false, size = 'md' }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const icon = dietaryIcons[type];
  if (!icon) return null;

  const labels = menuData.dietaryKey.labels;

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        className={`${sizes[size]} cursor-help`}
        role="img"
        aria-label={labels[type]}
      >
        {icon.emoji}
      </span>

      {showLabel && (
        <span className="ml-1 text-sm text-text-light">{labels[type]}</span>
      )}

      {/* Tooltip */}
      {showTooltip && !showLabel && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-secondary rounded whitespace-nowrap z-10">
          {labels[type]}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary" />
        </span>
      )}
    </span>
  );
}

export function DietaryKey() {
  const allTypes = [
    'vegetarian',
    'vegan',
    'glutenFree',
    'nutFree',
    'dairyFree',
    'spicy',
    'chefsPick',
  ];

  return (
    <div className="bg-background-alt rounded-lg p-4">
      <h4 className="text-sm font-semibold text-secondary mb-3">{menuData.dietaryKey.title}</h4>
      <div className="flex flex-wrap gap-4">
        {allTypes.map((type) => (
          <DietaryIcon key={type} type={type} showLabel size="sm" />
        ))}
      </div>
    </div>
  );
}
