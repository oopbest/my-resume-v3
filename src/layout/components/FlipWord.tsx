import { FlipWords } from "@/components/ui/flip-words";

const FlipWordsComponent = () => {
  const words = [
    "Setthawut Pimthong",
    "Frontend Developer",
    "Full Stack Developer",
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="text-xl md:text-4xl mx-auto font-bold uppercase">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
};

export default FlipWordsComponent;
