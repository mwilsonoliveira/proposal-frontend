type Params = {
  params: { name: string };
};

export default function Perfil({ params }: Params) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.name}</h1>
    </main>
  );
}
