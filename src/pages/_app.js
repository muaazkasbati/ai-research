// pages/_app.jsx
import { Montserrat } from 'next/font/google';
import "@/styles/globals.css";

// Configure the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weights: [400, 500, 600, 700], // Specify the weights you need
  variable: '--font-montserrat', // Optional: CSS variable for more control
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
