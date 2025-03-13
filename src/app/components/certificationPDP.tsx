import Image from "next/image";
import woman from "../../../public/Assets/Essai Stage Site Internet (4).png";
import stamp from "../../../public/Assets/Essai Stage Site Internet (3).png";

export default function CertificationPDP() {
  return (
    <section className="bg-white py-10 px-4 md:px-10 flex justify-center mt-5">
      <div className="max-w-6xl flex flex-col md:flex-row items-center relative border-4 border-orange-400 rounded-xl p-6 shadow-lg" style={{ boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.9)' }}>
        {/* Left Image Section */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start relative">
          <div className="hidden md:inline-block bg-white absolute md:-bottom-25 md:-left-15 lg:-bottom-35 lg:-left-16 xl:-bottom-50 xl:-left-50  md:w-55 md:h-55 lg:w-70 lg:h-70 xl:w-100 xl:h-100 rounded-full border-4 border-orange-400 overflow-hidden">
            <Image
              src={woman}
              alt="Woman with megaphone"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {/* Title div */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                La certification,{" "}
                <span className="text-orange-500">
                  Plateforme de Dématérialisation Partenaire (PDP)
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 ">
              {/* Description div */}
              <div>
                <p className="text-gray-700 text-sm lg:text-base">
                  EsaLink vous annonce l'immatriculation officielle de sa
                  solution{" "}
                  <span className="font-bold underline text-black">
                    HUBTIMIZE E-Invoicing
                  </span>{" "}
                  en tant que Plateforme de Dématérialisation Partenaire (PDP).
                  Une étape cruciale qui témoigne de notre engagement à offrir
                  des solutions de facturation électronique sécurisées,
                  conformes aux réformes fiscales.
                </p>
                <p className="text-gray-700 text-sm lg:text-base">
                  La certification PDP est bien plus qu’une simple
                  certification. Elle est un gage de confiance pour toutes les
                  entreprises qui cherchent à optimiser et sécuriser leurs
                  processus de facturation.
                </p>
              </div>

              {/* Right Certification List */}
              <div className="flex flex-col gap-2 p-4 w-full">
                <p className="font-bold text-gray-700">
                  <span className="text-orange-500 font-bold mr-1">✔</span>
                  ISO27001
                </p>
                <p className="font-bold text-gray-700">
                  <span className="text-orange-500 font-bold mr-1">✔</span>
                  Interopérabilité
                </p>
                <p className="font-bold text-gray-700">
                  <span className="text-orange-500 font-bold mr-1">✔</span>
                  SecNumCloud
                </p>
                <p className="font-bold text-gray-700">
                  <span className="text-orange-500 font-bold mr-1">✔</span>{" "}
                  Respect RGPD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stamp */}
        <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-15 lg:w-32">
          <Image src={stamp} alt="Immatriculé PDP Stamp" />
        </div>
      </div>
    </section>
  );
}