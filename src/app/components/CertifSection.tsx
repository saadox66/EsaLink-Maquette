import wings from "../../../public/Assets/Essai Stage Site Internet (1).png";
import iso from "../../../public/Assets/Essai Stage Site Internet.png";
import visa from "../../../public/Assets/Essai Stage Site Internet (2).png";
import Image from "next/image";
import CertifCard from "./CertifCard";

export default function CertifSection() {
  const certifications = [
    {
      id: 1,
      image: iso,
      title:
        "EsaLink est certifié ISO/IEC 27001 sur ses solutions et services d'intégration B2B",
      description:
        "La norme ISO/IEC 27001 est un standard mondial pour les Systèmes de gestion de la sécurité de l'information (SMSI), définissant les critères pour organiser, implémenter, maintenir et améliorer continuellement la sécurité de l'information. Garanti une gestion sécurisée des données. Couvre l'ensemble des opérations, services et solutions, assurant que chaque processus et service respecte les normes les plus strictes de sécurité et de gestion des .",
    },
    {
      id: 2,
      image: visa,
      title: "La solution HUBTIMIZE E-Invoicing qualifiée SecNumCloud",
      description:
        "La qualification SecNumCloud, délivrée par l'ANSSI, est un visa de sécurité attestant du plus haut niveau de qualité, de sécurité et de confiance pour les prestataires de services cloud. Pour EsaLink, cela inclut des Data Centers en France et en Allemagne, assurant une protection robuste face aux cyberattaques et une conformité rigoureuse des processus. Les exigences du référentiel garantissent la protection du service cloud vis-à-vis du droit extra européen, grâce à la combinaison de trois mesures.",
    },
  ];

  return (
    <div className="bg-white w-full mb-5">
      <div className="relative container px-4 py-4 flex justify-center mx-auto">
        <div className="absolute z-10 hidden lg:flex justify-center items-center h-full">
          <Image src={wings} alt="Certifications" className="" />
        </div>
        <div className="relative max-w-7xl w-full p-1 rounded-lg shadow-2xl" style={{ boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.9)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-orange-500 pink-500 purple-500 to-blue-700 rounded-lg p-6"></div>

          <div className="relative bg-white rounded-lg p-4 flex justify-center flex-wrap md:flex-nowrap">
            {certifications.map((certificate) => (
              <CertifCard key={certificate.id} {...certificate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
