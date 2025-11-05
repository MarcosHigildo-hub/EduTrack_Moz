import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

// Tipo das propriedades do componente StatCard
type StatCardProps = {
  title: string;
  value: number | string;
  subtitle?: string;
  // buttonIcone: LucideIcon;
  icon: LucideIcon;
  color: string;
  buttonColor: string;
  onClick?: () => void;
};

// Componente principal StatCard que recebe as props definidas em StatCardProps
export default function StatCard({
  title,
  value,
  subtitle,
  // buttonIcone: ButtonIcone,
  icon: Icon,
  color,
  buttonColor,
  onClick,
}: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-1">
        <CardTitle className="text-lg flex gap-2 items-center ">
          <Icon className={`h-5 w-5 ${color}`} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex items-center justify-between">
          <p className={`text-3xl font-bold ${color}`}>{value}</p>
          {/* <Button className={`rounded-full ${buttonColor}`} onClick={onClick}>
            < ButtonIcone className="w-5 h-5"/>
          </Button> */}
        </div>

        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}
