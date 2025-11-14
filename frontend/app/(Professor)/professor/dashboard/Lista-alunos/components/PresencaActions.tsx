import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { FileDown } from "lucide-react";
export default function PresencaActions() {
  return (
    <div className="flex gap-3">
      <Button className="bg-[#2F59E0] hover:bg-green-700">
        <Save size={18} className="mr-2" /> Guardar presenças
      </Button>
      <Button variant="outline">
        <RotateCcw size={18} className="mr-2" /> Limpar seleção
      </Button>
      <Button variant="outline">
        <FileDown size={18} className="mr-2" /> Exportar lista
      </Button>
    </div>
  );
}
