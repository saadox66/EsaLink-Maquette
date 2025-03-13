export default function TechStack({nom, Tstyle} : {nom : string, Tstyle: string}) {
    return (
        <span className={Tstyle}>
            <h3 className="text-white max-[1358px]:text-lg">{nom}</h3>
        </span>
    );
}
