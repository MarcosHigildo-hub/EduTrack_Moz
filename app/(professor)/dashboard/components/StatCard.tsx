import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

// Tipo das propriedades do componente StatCard
type StatCardProps = {
  title: string;
  value: number | string;
  subtitle?: string;
  buttonText: string;
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
  buttonText,
  icon: Icon,
  color,
  buttonColor,
  onClick,
}: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2 justify-center">
          <Icon className={`h-5 w-5 ${color}`} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}

        <Button
          className={`mt-3 w-full ${buttonColor}`}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
