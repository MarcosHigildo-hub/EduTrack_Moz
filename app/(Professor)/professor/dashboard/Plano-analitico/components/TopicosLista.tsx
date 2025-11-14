// components/PlanoAnalitico/TopicosLista.tsx
type Topico = {
  id: number;
  nome: string;
  concluido: boolean;
};

type TopicosListaProps = {
  topicos: Topico[];
  onToggle: (id: number) => void;
};

export default function TopicosLista({ topicos, onToggle }: TopicosListaProps) {
  return (
    <div className="p-4 space-y-3 max-h-50 overflow-y-auto">
      {topicos.map((topico) => (
        <div
          key={topico.id}
          className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer
            ${topico.concluido ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
          onClick={() => onToggle(topico.id)}
        >
          <input
            type="checkbox"
            checked={topico.concluido}
            onChange={() => {}}
            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
          />
          <span className={`flex-1 font-medium ${topico.concluido ? 'text-green-700 line-through' : 'text-gray-800'}`}>
            {topico.id}. {topico.nome}
          </span>
          {topico.concluido ? (
            <span className="text-sm text-green-600 font-medium">Concluído</span>
          ) : (
            <span className="text-sm text-orange-600 font-medium">Pendente</span>
          )}
        </div>
      ))}
    </div>
  );
}