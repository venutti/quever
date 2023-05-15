import Header from "@components/Header";
import "./globals.css";

export const metadata = {
  title: "Quever",
  description: "Aplicación de recomendaciones de películas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className="min-h-[100svh] bg-gradient-to-r from-slate-900 to-slate-700 font-inter text-white p-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
