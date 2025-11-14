import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ChartLine } from "lucide-react";


export default function Progresse() {
  const percentagePrecenca = 0.81;
  const percentageMedia = 0.54;
  const percentageTarefas = 0.66;
  return (
    <div className="bg-white rounded-2xl text-center hover:shadow-lg transition-shadow shadow-sm">
      <div className="p-2">
        <h1 className="font-bold text-lg  flex justify-center items-center gap-2"> <ChartLine size={20}/> O seu desempenho</h1>
      </div>

      <div className="flex justify-between items-center py-2">
        <div className="mx-auto flex flex-col justify-center items-center space-y-2">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              value={percentagePrecenca}
              maxValue={1}
              text={`${percentagePrecenca * 100}%`}
              styles={buildStyles({
                pathTransitionDuration: 1.2, 
                pathColor: "#2FE0BE", 
                textColor: "#2F59E0",
                trailColor: "#e5e7eb", 
              })}
            />
          </div>
          <span className="text-sm text-gray-600 font-semibold">
            Quizz
          </span>
        </div>

        <div className="mx-auto flex flex-col justify-center items-center space-y-2">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              value={percentageTarefas}
              maxValue={1}
              text={`${percentageTarefas * 100}%`}
               styles={buildStyles({
                pathTransitionDuration: 1.2, 
                pathColor: "#2F91E0", 
                textColor: "#2F59E0",
                trailColor: "#e5e7eb", 
              })}
            />
          </div>
          <span className="text-sm text-gray-500 font-semibold">TPCs</span>
        </div>

        <div className="mx-auto flex flex-col justify-center items-center space-y-2">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              value={percentageMedia}
              maxValue={1}
              text={`${percentageMedia * 100}%`}
                styles={buildStyles({
                pathTransitionDuration: 1.2, 
                pathColor: "#3E2FE0", 
                textColor: "#2F59E0",
                trailColor: "#e5e7eb", 
              })}
            />
          </div>
          <span className="text-sm text-gray-500 font-semibold">
            Média geral
          </span>
        </div>
      </div>      
    </div>
  );
}
