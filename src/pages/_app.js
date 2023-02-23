import "@/styles/globals.css";
// pages/_app.js
// import { Inter } from "@next/font/google0";

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    // <main className={`${inter.variable} font-sans`}>
    //   
    // </main>
    <Component {...pageProps} />
  );
}
