import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Progresse() {
  const percentagePrecenca = 0.81;
  const percentageMedia = 0.54;
  const percentageTarefas = 0.66;
  return (
    <div className="bg-white mt-4 rounded-2xl text-center h-57 hover:shadow-lg transition-shadow shadow-sm">
      <div className="p-6">
        <h1 className="font-semibold text-xl text-[#2F59E0]">Desempenho da Turma</h1>
      </div>

      <div className="flex justify-between items-center py-5">
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
            Taxa de precença
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
          <span className="text-sm text-gray-500 font-semibold">Tarefas</span>
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
