import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <main className="bg-[url('/src/assets/images/background.jpg')] bg-cover bg-center bg-fixed px-10 py-16 min-h-dvh flex flex-col gap-6 items-center justify-center min-[420px]:px-14 min-[420px]:gap-8 sm:gap-10 md:px-20 lg:px-32 xl:px-40">
      <Header />
      <AppRoutes />
    </main>
  );
}

export default App;

// En el Footer pone al botón de reseteo -> Porque si sale error debe estar ese boton para resetear todo el estado y volver al inicio
