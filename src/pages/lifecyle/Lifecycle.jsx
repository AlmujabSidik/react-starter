import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/context";

const Lifecycle = () => {
  const cart = useContext(GlobalContext);
  const [count, setCount] = useState(cart.count);
  const [text, setText] = useState("");

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    cart.setCount(newCount); // Update context
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    cart.setCount(newCount); // Update context
  };
  useEffect(() => {
    console.log("dirender ketika count di update");
  }, [count]);

  useEffect(() => {
    console.log("dirender ketika text di update");
  }, [text]);

  return (
    <section>
      <h1>Lifecycle</h1>

      <div className="flex flex-col w-full h-[580px] items-center justify-center">
        <div className="flex space-x-4 items-center">
          <Button onClick={handleIncrement} size="sm" variant="outline">
            <Plus className="w-4 h-4" />
          </Button>

          <p className="text-3xl text-muted-foreground">{count}</p>
          <Button onClick={handleDecrement} size="sm" variant="outline">
            <Minus className="w-4 h-4" />
          </Button>
        </div>

        <div>
          <Input
            className="max-w-xs mt-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <p className="mt-4">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Lifecycle;
