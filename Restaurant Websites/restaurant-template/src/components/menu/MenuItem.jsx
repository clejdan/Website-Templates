import DietaryIcon from './DietaryIcon';

export default function MenuItem({ item }) {
  const { name, description, price, dietary = [], image } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Image (optional) */}
      {image && (
        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center flex-wrap gap-1">
            <h4 className="font-heading font-semibold text-secondary">{name}</h4>
            {dietary.map((type) => (
              <DietaryIcon key={type} type={type} size="sm" />
            ))}
          </div>
          <span className="text-primary font-semibold whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-text-light mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
