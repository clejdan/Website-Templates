import MenuItem from './MenuItem';

export default function MenuCategory({ category, items }) {
  return (
    <section id={category.id} className="scroll-mt-32">
      <h3 className="font-heading text-2xl font-semibold text-secondary mb-6 pb-2 border-b-2 border-accent">
        {category.name}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
