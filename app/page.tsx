import Image from "next/image";
import { redirect } from "next/navigation";

const App = async () => {
  redirect("/products");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>App</h1>
    </main>
  );
};
export default App;
