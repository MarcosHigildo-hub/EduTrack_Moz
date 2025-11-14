// app/login/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const schema = z.object({
    tipo: z.string().min(1),
    codigo: z.string().min(1),
    senha: z.string().min(1),
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
    alert(`Login: ${data.tipo} - ${data.codigo}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto">
      <Card className="w-full max-w-md border-t-4 border-blue-600 shadow-xl">
        <div className="p-6 space-y-6">
          {/* === TÍTULO === */}
          <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* === TIPO DE USUÁRIO === */}
            <div>
              <RadioGroup
                onValueChange={(v) => setValue("tipo", v, { shouldValidate: true })}
                defaultValue="aluno"
                className="flex justify-center gap-6"
              >
                <Input {...register("tipo")} type="hidden" />
                {["professor", "aluno", "encarregado"].map((tipo) => (
                  <div key={tipo} className="flex items-center space-x-2">
                    <RadioGroupItem value={tipo} id={tipo} />
                    <Label htmlFor={tipo} className="capitalize cursor-pointer font-medium">
                      {tipo === "encarregado" ? "Encarregado" : tipo}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.tipo && <p className="text-xs text-red-500 mt-1 text-center">{errors.tipo.message}</p>}
            </div>

            {/* === EMAIL / CÓDIGO === */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium">Email ou Código</Label>
              </div>
              <Input
                type="text"
                placeholder="exemplo@dominio.com"
                className="pl-10"
                {...register("codigo")}
              />
              {errors.codigo && <p className="text-xs text-red-500 mt-1">{errors.codigo.message}</p>}
            </div>

            {/* === SENHA === */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium">Senha</Label>
              </div>
              <div className="relative">
                <Input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  {...register("senha")}
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {mostrarSenha ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.senha && <p className="text-xs text-red-500 mt-1">{errors.senha.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600  text-white font-bold py-3 text-lg"
            >
              Entrar
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}