import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/about.scss";

export default function About() {
  return (
    <div>
      <Header />
      <main className="about">
        <h1>About Avocadro</h1>
        <p>
          Avocadro is an educational platform designed to make learning fun and engaging.
        </p>
      </main>
      <Footer />
    </div>
  );
}
