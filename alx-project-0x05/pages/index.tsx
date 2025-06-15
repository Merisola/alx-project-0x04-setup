import Button from "@/components/common/Button";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  const goToCounterApp = () => {
    router.push("/counter-app");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-indigo-600 via-pink-500 to-yellow-300 text-white pt-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="mb-6 text-white">
        Explore different ways to manage state in React!
      </p>

      <Button
        buttonLabel="Go to Counter App 🚀"
        buttonSize="text-lg"
        buttonBackgroundColor="blue"
        action={goToCounterApp}
      />
      <div className="bg-blue-500 text-white p-4 rounded-md">
        Tailwind colors are working 🎨
      </div>
    </main>
  );
}
