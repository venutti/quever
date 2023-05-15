import Logo from "./Logo";

export default function Header() {
  return (
    <header className="grid place-items-center py-3">
      <Logo />
      <p className="mt-2 text-lg text-center">Explora nuevos títulos</p>
    </header>
  );
}
