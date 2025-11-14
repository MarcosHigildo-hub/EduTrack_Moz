// components/Avaliacoes/FiltrosAvaliacao.tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FiltrosProps = {
  disciplina: string;
  semestre: string;
  onDisciplinaChange: (value: string) => void;
  onSemestreChange: (value: string) => void;
};

export default function FiltrosAvaliacao({ disciplina, semestre, onDisciplinaChange, onSemestreChange }: FiltrosProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl border-b">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Disciplina:</span>
        <Select value={disciplina} onValueChange={onDisciplinaChange}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="matematica">Matemática</SelectItem>
            <SelectItem value="portugues">Português</SelectItem>
            <SelectItem value="ciencias">Ciências</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Semestre:</span>
        <Select value={semestre} onValueChange={onSemestreChange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1º</SelectItem>
            <SelectItem value="2">2º</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}