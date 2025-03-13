import Image from "next/image";

export default function CertifCard({ image, title, description }) {
  return (
    <div className="flex flex-col  items-center p-6  bg-white rounded-lg  mx-4 my-4 max-w-lg w-full">
      {/*card header*/}
      <div className="card-header py-3 align-center">
        <Image src={image} alt="Certification" height={100} />
      </div>
      {/*card body*/}
      <div className="card-body mb-3">
        <div className="mb-3">
          <p className="text-lg font-extrabold">{title}</p>
        </div>
        <div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
