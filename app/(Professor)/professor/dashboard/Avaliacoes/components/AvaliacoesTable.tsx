
import AvaliacaoRowEditavel from './AvaliacaoRow';

type Avaliacao = {
  id: number;
  nome: string;
  acs1: number | null;
  acs2: number | null;
  acs3: number | null;
  ap: number | null;
  media: number | null;
  estado: 'feito' | 'pendente';
};

type AvaliacoesTableProps = {
  avaliacoes: Avaliacao[];
  onUpdate: (id: number, campo: 'acs1' | 'acs2' | 'acs3' | 'ap', valor: number | null) => void;
};

export default function AvaliacoesTable({ avaliacoes, onUpdate }: AvaliacoesTableProps) {
  return (
    <div className="max-h-96 overflow-y-auto">
      <table className="w-full">
        <thead className="sticky top-0 bg-white border-b-2 border-gray-300 z-10">
          <tr className="text-left text-sm font-semibold text-gray-700">
            <th className="px-4 py-3">Nº</th>
            <th className="px-4 py-3">Nome do Aluno</th>
            <th className="px-4 py-3 text-center">ACS1</th>
            <th className="px-4 py-3 text-center">ACS2</th>
            <th className="px-4 py-3 text-center">ACS3</th>
            <th className="px-4 py-3 text-center">AP</th>
            <th className="px-4 py-3 text-center">Média</th>
            <th className="px-4 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {avaliacoes.map((avaliacao) => (
            <AvaliacaoRowEditavel
              key={avaliacao.id}
              avaliacao={avaliacao}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}