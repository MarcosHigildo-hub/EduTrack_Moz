import { Progress } from '@/components/ui/progress';

type ProgressoProps = {
  concluidos: number;
  total: number;
};

export default function ProgressoCirculo({ concluidos, total }: ProgressoProps) {
  const percent = Math.round((concluidos / total) * 100);

  return (
    <div className="flex items-center gap-10 p-4 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 56}`}
            strokeDashoffset={`${2 * Math.PI * 56 * (1 - percent / 100)}`}
            className="text-green-500 transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-green-600">{percent}%</span>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-800">
          {concluidos} / {total} Tópicos Concluídos
        </p>
        <Progress value={percent} className="mt-2 h-3" />
      </div>
    </div>
  );
}