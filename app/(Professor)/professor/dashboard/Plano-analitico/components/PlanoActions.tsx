import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

export default function PlanoActions() {
  return (
    <div className="p-4 bg-gray-50 border-t rounded-b-xl">
      <Button variant="outline" className="gap-2 bg-[#2F59E0] text-white">
        <FileDown size={18} /> Exportar Plano
      </Button>
    </div>
  );
}