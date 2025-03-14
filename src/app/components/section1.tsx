import Card from "./card";
import Intro from "./intro";
import TechStack from "./teckStack";

const profiles= [
  {
    poste: "Consultant Supply Chain",
    expertise: "Expert - PMO - Manager",
    description: "Expert chargé d’<strong>optimiser la gestion des flux logistiques</strong> d’une entreprise, depuis l’approvisionnement en matières premières jusqu’à la livraison des produits finis. Son rôle consiste à analyser les processus existants, identifier des pistes d’amélioration et mettre en œuvre des solutions pour réduire les coûts, améliorer la qualité et augmenter l’efficacité. Grâce à son expertise, il aide les entreprises à mieux gérer leurs ressources, à anticiper les risques et à répondre aux fluctuations du marché."
  
  },

  {
    poste: "Consultant SAP",
    expertise: "ERP - MM - FICO",
    description: "Expert spécialisé dans la mise en œuvre et l’<strong>optimisation des modules du logiciel SAP</strong>, un progiciel de gestion intégré (ERP) utilisé par de nombreuses entreprises pour centraliser leur processus. Il analyse les besoins de l’entreprise, configure les modules SAP et forme les équipes à leur utilisation. Grâce à ses compétences, le consultant SAP permet aux entreprises d’améliorer leur efficacité opérationnelle, de mieux gérer leurs ressources et de faciliter la prise de décision grâce à des données fiables et centralisées."
  }
];

{/* Contenues des span */}
const TechStyle = [
  {
    id: 1,
    nom: "Supply Chain",
    Tstyle:
      "relative right-24 tech inline-block px-3 py-1 rounded bg-sky-200 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 2,
    nom: "Distribution",
    Tstyle:
      "relative right-21 tech inline-block px-3 py-1 rounded bg-sky-300 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 3,
    nom: "SAP",
    Tstyle:
      "relative max-w-30 right-15 tech inline-block px-3 py-1 rounded bg-purple-200 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 4,
    nom: "SAP MM",
    Tstyle:
      "relative max-w-40 right-13 tech inline-block px-3 py-1 rounded bg-orange-200 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 5,
    nom: "SAP S/4HANA",
    Tstyle:
      "relative right-13 max-w-67 mb-14 tech inline-block px-3 py-1 rounded bg-cyan-200 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 6,
    nom: "SAP SD",
    Tstyle:
      "relative max-w-29 tech inline-block px-3 py-1 rounded bg-purple-300 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 7,
    nom: "SAP ERP",
    Tstyle:
      "relative right-20 max-w-67 tech inline-block px-3 py-1 rounded bg-purple-400 transform transition duration-300 hover:translate-x-4",
  },
  {
    id: 8,
    nom: "Salesforce",
    Tstyle:
      "relative right-30 max-w-75 tech inline-block px-3 py-1 rounded bg-blue-200 transform transition duration-300 hover:translate-x-4",
  },
];



export default function Section1() {
  return (
    <div className="mb-7 bg-white font-[family-name:var(--font-geist-sans)] px-5 py-3 text-black">
      
      <Intro />
        
      <div className="absolute hidden lg:flex items-center justify-center mt-4">
        < div className="max-[1358px]:w-45 w-85 p-4" >
          < div className="flex flex-col gap-3 text-center" >
            {TechStyle.map((style) => (
              <TechStack key={style.id} {...style}/>
            ))}
          </div >
        </div >
      </div>

      <section className="card-container flex flex-wrap justify-center md:flex-nowrap gap-8 mt-12">
        {profiles.map((profile) => (
          <Card key={profile.poste} {...profile} />
        ))}
      </section>
      
    </div>
  );
}
