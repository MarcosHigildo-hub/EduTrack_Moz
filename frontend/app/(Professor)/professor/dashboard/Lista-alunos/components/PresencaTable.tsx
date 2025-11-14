
import PresencaRow from './PresencaRow';

type Aluno = {
    id: number;
    nome: string;
    presente: boolean;
    observacao: string;
};

type PresencaTableProps = {
    alunos: Aluno[];
    onToggle: (id: number) => void;
    onObservacao: (id: number, obs: string) => void;
};

export default function PresencaTable({ alunos, onToggle, onObservacao}: PresencaTableProps) {
    return (
        <table className='w-full'>
            <thead>
                <tr className='border-b-2 border-gray-300 text-left  font-medium text-[#2F59E0]'>
                    <th className='px-4 pb-2'>Nº</th>
                    <th className='px-4 pb-2'>Nome do Aluno</th>
                    <th className='px-4 pb-2'>Presença</th>
                    <th className='px-4 pb-2'>Observações</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno)=> (
                    <PresencaRow 
                    key={aluno.id}
                    aluno={aluno}
                    onToggle={() => onToggle(aluno.id)}
                    onObservacao={(obs) => onObservacao(aluno.id, obs)} 
                    />
                ))}
            </tbody>
        </table>
    );
}
