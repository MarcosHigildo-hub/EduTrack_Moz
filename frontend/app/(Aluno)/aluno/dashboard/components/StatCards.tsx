import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

// Tipo das propriedades do componente StatCard
type StatCardProps = {
  title: string;
  value: number | string;
  subtitle?: string;
  buttonIcone: LucideIcon;
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
  buttonIcone: ButtonIcone,
  icon: Icon,
  color,
  // buttonColor,
  // onClick,
}: StatCardProps) {
  return (
    <Card className="hover:shadow-2xl transition-shadow rounded-2xl  ">
      <CardHeader className="">
        <CardTitle className="text-lg flex gap-1 items-center justify-center">
          <Icon className={`h-6 w-6 ${color}`} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <div className="flex flex-col items-center justify-center">
          <p className={`text-4xl font-bold ${color}`}>{value}</p>
          {/* <Button className={`rounded-full ${buttonColor}`} onClick={onClick}>
            < ButtonIcone className="w-5 h-5"/>
          </Button> */}
          {subtitle && <p className="text-sm text-gray-600 flex items-center gap-2">< ButtonIcone className="w-4 h-4"/> {subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
