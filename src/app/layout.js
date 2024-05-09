import "./globals.css";

export const metadata = {
  title: "Smart Watch",
  description: "Aymen dakir project smart watch",
  icon: {
    icon: ["./../../favicon.ico"],
    apple: ["./../../apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
