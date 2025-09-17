import Banner from "../components/Banner";
import aboutImg from "../assets/banner-about.png";
import Collapse from "../components/Collapse";
import "./About.css";

const sections = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement répond aux critères de sécurité établis. Nous organisons également des ateliers domestiques pour nos hôtes.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <Banner image={aboutImg} className="banner banner--about" />

      <section className="container about-stack">
        {sections.map((s) => (
          <Collapse key={s.title} title={s.title}>
            <p>{s.content}</p>
          </Collapse>
        ))}
      </section>
    </main>
  );
}
