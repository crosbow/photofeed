import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Photofeed | Photo collection",
  description: "Photofeed is a photo view website kind of piterest",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body cz-shortcut-listen="true">
        <NavBar />
        <div className="container my-4 lg:my-8 ">{children}</div>
      </body>
    </html>
  );
}
