import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] px-5 py-3 text-black">
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
}
