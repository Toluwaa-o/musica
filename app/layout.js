import Footer from "./components/Footer.js/Footer";
import Header from "./components/Header/Header";
import Musicacontext from "./context/musicContext";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Musica",
  description: `Welcome to Musica, where the world's melodies converge into a symphony of endless possibilities. Musica is more than just a music streaming platform; it's your gateway to a universe of sonic exploration and connection.

  Discover: Dive into the vast ocean of musical diversity with Musica's cutting-edge discovery tools. Whether you're into mainstream hits or underground gems, Musica's intuitive interface helps you unearth new artists, genres, and tracks perfectly tailored to your unique preferences. With curated playlists and personalized recommendations, the thrill of discovery is always at your fingertips.
  
  Stream: Immerse yourself in a seamless streaming experience with Musica. From the latest chart-toppers to timeless classics, enjoy crisp, high-quality audio playback across all your devices. Whether you're on a morning jog, chilling at home, or commuting to work, Musica ensures that your favorite tunes accompany you every step of the way.
  
  Personalize: Make Musica your own with powerful customization features. Craft your playlists, fine-tune your listening preferences, and let Musica's advanced algorithms curate the perfect soundtrack for every moment. Whether you're in the mood for upbeat rhythms or soothing melodies, Musica adapts to your mood and tastes, ensuring an unparalleled musical journey.
  
  Experience the magic of Musica and let the rhythm of life unfold before your ears. Join us on a journey where every note tells a story and every beat ignites the soul. Welcome to Musica—where music comes alive.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} bg-bgDark py-2 relative md:grid md:grid-cols-layout md:max-h-screen md:overflow-scroll`}
      >
        <Musicacontext>
          <Header />
          {children}
          <Footer />
        </Musicacontext>
      </body>
    </html>
  );
}
