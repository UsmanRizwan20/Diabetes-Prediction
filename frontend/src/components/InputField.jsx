export default function InputField({ label, name, value, onChange, placeholder, min, max, step }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        required
        className="px-4 py-2.5 bg-background border border-card-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
      />
    </div>
  );
}
