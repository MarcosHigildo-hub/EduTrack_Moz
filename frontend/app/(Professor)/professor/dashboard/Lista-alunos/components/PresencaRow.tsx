import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X } from "lucide-react";

type Aluno = {
  id: number;
  nome: string;
  presente: boolean;
  observacao: string;
};

type PresencaRowProps = {
  aluno: Aluno;
  onToggle: () => void;
  onObservacao: (obs: string) => void;
};

export default function PresencaRow({
  aluno,
  onToggle,
  onObservacao,
}: PresencaRowProps) {
  return (
    <tr className="boreder-b hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 text-sm font-medium text-gray-700">
        {aluno.id}
      </td>
      <td className="px-4 py-3 font-sm text-gray-900">{aluno.nome}</td>

      <td className="px-4 py-3">
        <Button
          variant={aluno.presente ? "default" : "outline"}
          size="sm"
          onClick={onToggle}
          className={`min-w-20 transition-all ${
            aluno.presente
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {aluno.presente ? (
            <>
              <Check size={16} className="mr-1" /> Presente
            </>
          ) : (
            <>
              <X size={16} className="mr-1" /> Ausente
            </>
          )}
        </Button>
      </td>

      <td className="px-4 py-3">
        <Input
          type="text"
          value={aluno.observacao}
          onChange={(e) => onObservacao(e.target.value)}
          placeholder="Adicionar observação..."
          className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </td>
    </tr>
  );
}
