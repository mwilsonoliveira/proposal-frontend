"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function Home(): JSX.Element {
  const [name, setName] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/perfil/${name}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Login</div>
      <form>
        <input
          type="text"
          placeholder="Insira seu nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="text-black"
        />
        <button type="submit" onClick={handleSubmit}>
          Entrar
        </button>
      </form>
    </main>
  );
}
