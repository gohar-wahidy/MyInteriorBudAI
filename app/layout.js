import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Dosis} from 'next/font/google'
import Provider from "./provider";

export const metadata = {
  title: "MyInteriorBudAI",
  description: "Effortless Interior Designing at Your Fingertips!",
};

const dosis=Dosis({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={dosis.className}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
