import { Toaster } from "react-hot-toast";
import "./globals.css";
import GlobalProvider from "./context/GlobalProvider";

export const metadata = {
  title: "Booking App",
  description: "Book, manage, and track your orders with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </head>
      <body>
        <GlobalProvider>
        <Toaster/>
        {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
