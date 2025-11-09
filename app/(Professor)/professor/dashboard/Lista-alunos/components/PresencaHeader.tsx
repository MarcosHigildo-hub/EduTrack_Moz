import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Ghost, icons } from "lucide-react";
type prencaHeaderprops = {
  currentDate: string;
  onPrev: () => void;
  onNext: () => void;
};

export default function PresencaHeader({
  currentDate,
  onPrev,
  onNext,
}: prencaHeaderprops) {
  return (
    <div className="bg-white border-b border-[#9BBCF0] p-2 rounded-2xl">
      <div className="flex justify-between items-center px-4">
        <span className="text-gray-400  mt-5">3.ª classe</span>
        <h1 className="font-semibold text-xl text-[#2F59E0]">
          Lista de Alunos
        </h1>
        <span className="text-gray-400 mt-5">Turma: C</span>
      </div>

      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          className="h-8 w-8 rounded-full hover:bg-white"
        >
          <ChevronLeft size={18} />
        </Button>

        <div className="px-4 py-1 text-sm font-semibold text-gray-700 min-28  text-center">
          {currentDate}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="h-8 w-8 rounded-full hover:bg-white"
        >
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
}
