export const metadata = {
  title: "My Next App",
  description: "Generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>

        <main>{children}</main>

        <footer
          style={{
            backgroundColor: "red",
            border: "1px solid black",
          }}
        >
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
