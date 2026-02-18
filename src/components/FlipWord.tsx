import { FlipWords } from "@/components/ui/flip-words";
import { flipWords } from "@/data/constants";

const FlipWordsDemo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-xl md:text-4xl mx-auto font-bold uppercase">
        <FlipWords words={flipWords} /> <br />
      </div>
    </div>
  );
};

export default FlipWordsDemo;
