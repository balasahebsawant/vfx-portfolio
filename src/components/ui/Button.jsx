export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "px-8 py-4 font-semibold rounded-md inline-block";

  const styles = {
    primary: "bg-accent text-text hover:bg-accentDark",
    outline: "border border-text text-text hover:border-accent hover:text-accent",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
