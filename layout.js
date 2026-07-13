import "./globals.css";

export const metadata = {
  title: "Aseel Trading Dashboard",
  description: "Trading accounts dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
