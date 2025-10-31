"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const schema = z.object({
    tipo: z.string().min(1, "Selecione um tipo de usário"),
    codigo: z.string().min(1, "Digite o seu Email ou código do utilizador"),
    senha: z.string().min(1, "Digite sua senha"),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const tipo =
      data.tipo === "professor"
        ? "Professor"
        : data.tipo === "aluno"
        ? "Aluno"
        : "Encarregado";

    alert(
      `Login bem-sucedido!\n\n` +
        `Tipo: ${tipo}\n` +
        `Código: ${data.codigo}\n` +
        `Senha: ${data.senha}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-t-4 border-green-600 shadow-2xl">
        {/* <div className="bg-green-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">EDUTRACK MOZ</h1>
        </div> */}

        <div className="p-6 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-2xl font-semibold">
              Bem vindo(a) a <span className="text-green-600">EDUTRACK</span>{" "}
              Moz!
            </p>
            <p className="text-sm text-gray-600">
              Uma plataforma criada para aproximar professores, alunos e
              encarregados.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label className="flex items-center gap-2 text-sm font-medium mb-3">
                <User className="w-4 h-4" />
                Selecione o seu eu tipo de utilizador:
              </Label>
              <RadioGroup
                onValueChange={(value) => {
                  setValue("tipo", value, { shouldValidate: true});
                }}
                defaultValue="aluno"
                className="flex pl-4"
              >

                <Input {...register("tipo")} type="hidden" />
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professor" id="professor" />
                  <Label htmlFor="professor" className="cursor-pointer">
                    Professor
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="aluno" id="aluno" />
                  <Label htmlFor="aluno" className="cursor-pointer">
                    Aluno
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="encarregado" id="encarregado" />
                  <Label htmlFor="encarregado" className="cursor-pointer">
                    Encarregado
                  </Label>
                </div>
              </RadioGroup>

              {errors.tipo && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.tipo.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Label className="flex items-center gap-2 text-sm font-medium">
                Email ou Número de Utilizador
              </Label>

              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/7 translate-1/3 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="text"
                  placeholder="exemplo@dominio.com"
                  className="pl-10 pr-3"
                  {...register("codigo")}
                />

                {errors.codigo && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.codigo.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2 text-sm font-medium">
                Palavra-passe
              </Label>

              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/7 translate-1/3 text-gray-400 w-4 h-4" />

                <Input
                  id="password"
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="••••••"
                  className="pl-10 pr-3"
                  {...register("senha")}
                />

                {errors.senha && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.senha.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {mostrarSenha ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg">
              Entrar
            </Button>

            <div className="text-center text-xs">
              <p>
                Esqueceu a palavra-passe?{" "}
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline"
                >
                  Recuperar
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="bg-gray-50 p-3 text-center text-xs text-gray-600 border-t">
          © 2025 EduTrack Moz — Educação Digital para Todos
        </div>
      </Card>
    </div>
  );
}
