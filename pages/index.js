import Image from "next/image";
import { MdDownload } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import Team from "./team";

export default function Home() {
  return (
    <>
    <div className={styles.home}>
      <Header />
      <main className={`container ${styles.mainSection}`}>
        <div className={styles.textBlock}>
          <h2>Educational Platform</h2>
          <h1>Avocadro</h1>
          <p>
            Learn smarter with our modern educational platform. Explore courses and unlock your potential.
          </p>

          {/* Блок с кнопками */}
          <div className={styles.downloadButtons}>
            <a href="#" className={styles.downloadBtn} aria-label="Download">
              <MdDownload size={36} color="#27ae60" />
              <span>Download</span>
            </a>

            <a
              href="https://apps.apple.com/app/id375380948"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeBtn}
              aria-label="App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>

            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeBtn}
              aria-label="Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <Image
            src="/avocado.png"
            alt="Avocado"
            width={480}
            height={620}
            priority
            className={styles.heroImage}
          />
        </div>
      </main>
      <Team />
      <Footer />
    </div>
    </>
  );
}
