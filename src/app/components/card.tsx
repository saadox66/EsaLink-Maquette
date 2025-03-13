export default function Card({ poste, expertise, description } : { poste: string; expertise: string; description: string }) {
  return (
    <div className="card w-full border border-gray-50 rounded p-4 bg-gray-50 p-3 sm:p-4 max-w-sm max-[1230px]:max-w-xs">
      {/* Header : Poste & Expertise */}
      <div className="card-header text-center mb-3">
        <h4 className="text-blue-400 text-lg sm:text-xl">{poste}</h4>
        <h6 className="text-sm sm:text-base">{expertise}</h6>
      </div>

      {/* Description */}
      <div className="card-body mb-3">
        <p className="text-gray-700 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>

      {/* Button */}
      <div className="card-bottom text-center">
        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">
          Je suis intéressé(e)
        </button>
      </div>
    </div>
  );
}
