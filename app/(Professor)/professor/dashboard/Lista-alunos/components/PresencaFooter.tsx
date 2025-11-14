import { Badge } from "@/components/ui/badge";
import PresencaActions from "./PresencaActions";

type PresencaFooterProps = {
    total: number;
    presentes: number;
};

export default function PresencaFooter({total, presentes}: PresencaFooterProps) {
    return (
        <div className="bg-green-50 border-t-2 border-green-200 px-6 py-7 rounded-b-xl ">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-green-800 "> Total presentes: </span>
                    <Badge variant="default" className="bg-green-600 text-white text-lg px-3">
                        {presentes} / {total}
                    </Badge>
                </div>

                <div>
                    < PresencaActions />
                </div>
            </div>
        </div>
    );
}