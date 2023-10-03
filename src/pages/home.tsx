import PageLayout from "@/components/layouts/pagelayout.cl";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold text-center text-primary">
          Welcome to the home page!
        </h1>
        <p className="text-sm text-center text-secondary">
          This is a sample page built with vite.js and Tailwind CSS.
        </p>
      </div>
      <h1>Vigoz ha renacido junto con ayato!</h1>
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(count + 1.001)}>Increment</Button>
    </PageLayout>
  );
};
export default HomePage;
