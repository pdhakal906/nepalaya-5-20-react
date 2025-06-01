import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <h1 className="text-red-500">This is Heading Layout of Notes APP</h1>
        {children}
      </body>
    </html>
  );
}
