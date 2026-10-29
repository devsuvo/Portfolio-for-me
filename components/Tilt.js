// Plain wrapper (3D tilt removed for performance).
export default function Tilt({ children, className = "", style }) {
  return <div className={className} style={style}>{children}</div>;
}
