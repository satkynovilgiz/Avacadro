import Image from "next/image";
import styles from "../styles/Team.module.scss";

export default function Team() {
  return (
    <div className={styles.teamSection}>
      <h1 className={styles.teamTitle}>Meet Our Team</h1>
      <main className={styles.teamWrapper}>
        {/* Левый блок с 6 элементами */}
        <div className={styles.mainCard}>
          <div className={styles.photoGrid}>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
                alt="Alice"
                width={200}
                height={150}
                unoptimized
              />
              <p>Alice - CEO</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
                alt="Bob"
                width={200}
                height={150}
                unoptimized
              />
              <p>Bob - Developer</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Charlie"
                width={200}
                height={150}
                unoptimized
              />
              <p>Charlie - Designer</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                alt="David"
                width={200}
                height={150}
                unoptimized
              />
              <p>David - QA Engineer</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
                alt="Eva"
                width={200}
                height={150}
                unoptimized
              />
              <p>Eva - UI/UX</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="Frank"
                width={200}
                height={150}
                unoptimized
              />
              <p>Frank - PM</p>
            </div>
          </div>
        </div>

        {/* Правый текстовый блок */}
        <div className={styles.teamText}>
          <h2>
            We created our platform so that everyone can access the latest knowledge
          </h2>
        </div>
      </main>
    </div>
  );
}
