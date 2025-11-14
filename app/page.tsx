
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Home() {
  return (
    // <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex justify-center items-center flex-col mx-auto">
        <div>
          <Image src={logo} alt="logo da XEIME" width={200} height={200} />
        </div>
        <p className="mt-2 text-gray-600"> Uma plataforma criada para aproximar professores, alunos e
              encarregados.</p>
      </div>
    // </main>
  );
}