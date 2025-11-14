// components/Avaliacoes/AvaliacaoRowEditavel.tsx
'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

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

type AvaliacaoRowProps = {
  avaliacao: Avaliacao;
  onUpdate: (id: number, campo: 'acs1' | 'acs2' | 'acs3' | 'ap', valor: number | null) => void;
};

export default function AvaliacaoRowEditavel({ avaliacao, onUpdate }: AvaliacaoRowProps) {
  const [editando, setEditando] = useState<string | null>(null);
  const [valorTemp, setValorTemp] = useState<string>('');

  const handleBlur = (campo: 'acs1' | 'acs2' | 'acs3' | 'ap') => {
    const num = valorTemp === '' ? null : Number(valorTemp);
    if (num !== null && (num < 0 || num > 20)) return;
    onUpdate(avaliacao.id, campo, num);
    setEditando(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, campo: 'acs1' | 'acs2' | 'acs3' | 'ap') => {
    if (e.key === 'Enter') handleBlur(campo);
    if (e.key === 'Escape') setEditando(null);
  };

  const renderNota = (valor: number | null, campo: 'acs1' | 'acs2' | 'acs3' | 'ap') => {
    if (editando === campo) {
      return (
        <Input
          type="number"
          min="0"
          max="20"
          value={valorTemp}
          onChange={(e) => setValorTemp(e.target.value)}
          onBlur={() => handleBlur(campo)}
          onKeyDown={(e) => handleKeyDown(e, campo)}
          className="w-16 h-8 text-center"
          autoFocus
        />
      );
    }
    return (
      <div
        className="w-16 text-center cursor-pointer hover:bg-gray-100 rounded px-1 py-0.5"
        onClick={() => {
          setEditando(campo);
          setValorTemp(valor?.toString() || '');
        }}
      >
        {valor ?? '—'}
      </div>
    );
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 text-sm font-medium text-gray-700">{avaliacao.id}</td>
      <td className="px-4 py-3 font-medium text-gray-900">{avaliacao.nome}</td>
      <td className="px-4 py-3">{renderNota(avaliacao.acs1, 'acs1')}</td>
      <td className="px-4 py-3">{renderNota(avaliacao.acs2, 'acs2')}</td>
      <td className="px-4 py-3">{renderNota(avaliacao.acs3, 'acs3')}</td>
      <td className="px-4 py-3">{renderNota(avaliacao.ap, 'ap')}</td>
      <td className="px-4 py-3 text-center font-semibold">
        {avaliacao.media !== null ? avaliacao.media.toFixed(2) : '—'}
      </td>
      <td className="px-4 py-3">
        <Badge
          variant={avaliacao.estado === 'feito' ? 'default' : 'secondary'}
          className={
            avaliacao.estado === 'feito'
              ? 'bg-green-600 text-white'
              : 'bg-orange-100 text-orange-700'
          }
        >
          {avaliacao.estado === 'feito' ? 'Feito' : 'Pendente'}
        </Badge>
      </td>
    </tr>
  );
}