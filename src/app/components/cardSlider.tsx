"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import profile from "../../../public/Assets/google-customize-profile-2.svg";

export default function CardSlider() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // responsive card display
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) { // Mobile
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setVisibleCards(2);
      } else { // Desktop
        setVisibleCards(3);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  {/* Contenu des card */}
  const slides = [
    {
      name: "NOM Prénom",
      title: "Intitulé du poste + Entreprise",
      text: `e Lorem Ipsum est simplement du faux texte employé
dans la composition et la mise en page avant
impression. Le Lorem Ipsum est le faux texte standard
de l'imprimerie depuis les années 1500, quand un
imprimeur anonyme assembla ensemble des
morceaux de texte pour réaliser un livre spécimen de
polices de texte. Il n'a pas fait que survivre cinq siècles,
mais s'est aussi adapté à la bureautique informatique,
sans que son contenu n'en soit modifié. Il a été
popularisé dans les années 1960 grâce à la vente de
feuilles Letraset contenant des passages du Lorem
Ipsum, et, plus récemment, par son inclusion dans des
applications de mise en page de texte, comme Aldus
PageMaker`
    },
    {
      name: "NOM Prénom",
      title: "Intitulé du poste + Entreprise",
      text: `e Lorem Ipsum est simplement du faux texte employé
dans la composition et la mise en page avant
impression. Le Lorem Ipsum est le faux texte standard
de l'imprimerie depuis les années 1500, quand un
imprimeur anonyme assembla ensemble des
morceaux de texte pour réaliser un livre spécimen de
polices de texte. Il n'a pas fait que survivre cinq siècles,
mais s'est aussi adapté à la bureautique informatique,
sans que son contenu n'en soit modifié. Il a été
popularisé dans les années 1960 grâce à la vente de
feuilles Letraset contenant des passages du Lorem
Ipsum, et, plus récemment, par son inclusion dans des
applications de mise en page de texte, comme Aldus
PageMaker`
    },
    {
      name: "NOM Prénom",
      title: "Intitulé du poste + Entreprise",
      text: `e Lorem Ipsum est simplement du faux texte employé
dans la composition et la mise en page avant
impression. Le Lorem Ipsum est le faux texte standard
de l'imprimerie depuis les années 1500, quand un
imprimeur anonyme assembla ensemble des
morceaux de texte pour réaliser un livre spécimen de
polices de texte. Il n'a pas fait que survivre cinq siècles,
mais s'est aussi adapté à la bureautique informatique,
sans que son contenu n'en soit modifié. Il a été
popularisé dans les années 1960 grâce à la vente de
feuilles Letraset contenant des passages du Lorem
Ipsum, et, plus récemment, par son inclusion dans des
applications de mise en page de texte, comme Aldus
PageMaker`
    },
    {
      name: "NOM Prénom",
      title: "Intitulé du poste + Entreprise",
      text: `e Lorem Ipsum est simplement du faux texte employé
dans la composition et la mise en page avant
impression. Le Lorem Ipsum est le faux texte standard
de l'imprimerie depuis les années 1500, quand un
imprimeur anonyme assembla ensemble des
morceaux de texte pour réaliser un livre spécimen de
polices de texte. Il n'a pas fait que survivre cinq siècles,
mais s'est aussi adapté à la bureautique informatique,
sans que son contenu n'en soit modifié. Il a été
popularisé dans les années 1960 grâce à la vente de
feuilles Letraset contenant des passages du Lorem
Ipsum, et, plus récemment, par son inclusion dans des
applications de mise en page de texte, comme Aldus
PageMaker`
    },
    {
      name: "NOM Prénom",
      title: "Intitulé du poste + Entreprise",
      text: `e Lorem Ipsum est simplement du faux texte employé
dans la composition et la mise en page avant
impression. Le Lorem Ipsum est le faux texte standard
de l'imprimerie depuis les années 1500, quand un
imprimeur anonyme assembla ensemble des
morceaux de texte pour réaliser un livre spécimen de
polices de texte. Il n'a pas fait que survivre cinq siècles,
mais s'est aussi adapté à la bureautique informatique,
sans que son contenu n'en soit modifié. Il a été
popularisé dans les années 1960 grâce à la vente de
feuilles Letraset contenant des passages du Lorem
Ipsum, et, plus récemment, par son inclusion dans des
applications de mise en page de texte, comme Aldus
PageMaker`
    },
  ];

  const maxIndex = Math.max(0, slides.length - visibleCards);

  {/* Fonctions de navigation */}
  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="w-full mx-0 py-8 sm:py-12 bg-gradient-to-r from-purple-100 to-cyan-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-2 sm:px-4"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="p-1 rounded-lg bg-gradient-to-r from-blue-300 via-orange-500 pink-500 purple-500 to-blue-700 h-full">
                  <div className="bg-gradient-to-r from-purple-100 to-cyan-100 rounded-lg shadow-lg p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={profile}
                        alt="Profile"
                        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-center mb-1">
                      {slide.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base text-center mb-3">
                      {slide.title}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed overflow-y-auto flex-1">
                      {slide.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons de Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 sm:left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 sm:right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}