import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div className={styles.brand}>Avocadro</div>
          <p>© 2025 Avocadro. All rights reserved.</p>
        </div>

        <div className={styles.centerBlock}>
          <div className={styles.getConnected}>Get connected</div>
          <div className={styles.contactIcons}>
            <FaPhone className={styles.icon} />
            <FaWhatsapp className={styles.icon} />
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.socialsTitle}>Socials</div>
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane className={styles.icon} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className={styles.icon} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
