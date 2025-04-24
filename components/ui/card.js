export function Card({ children }) {
  return <div className="rounded-2xl shadow-md border p-4">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}