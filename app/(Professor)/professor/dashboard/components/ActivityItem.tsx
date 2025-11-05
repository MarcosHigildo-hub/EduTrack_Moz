import { LucideIcon } from 'lucide-react';

// Tipo das propriedades do componente ActivityItem
type ActivityItemProps = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  subtitle: string;
  date: string;
};

// Componente principal StatCard que recebe as props definidas em ActivityItemProps
export default function ActivityItem({
  icon: Icon,
  iconColor,
  title,
  subtitle,
  date,
}: ActivityItemProps) {
    return(
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition">
      <div className="flex items-center space-x-3">
        <div className={`p-2 ${iconColor} rounded-full`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="font-medium text-sm text-gray-800">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
    );
}