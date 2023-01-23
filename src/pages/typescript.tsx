import { useState, useEffect, ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: string;
  onHover: (active: boolean) => null;
}

const TypescriptPage = () => {
  return (
    <main>
      <h1>Typescript</h1>
      <h2>Fix the typing of this button.</h2>

      <Button
        onHover={(active) => {
          console.log("a", active);
        }}
      >
        <span>This is a button</span>
      </Button>

      <Button
        onHover={(active) => {
          console.log("b", active);
        }}
      >
        This is a button
      </Button>
    </main>
  );
};

export const Button = ({ children, onHover, ...props }: ButtonProps) => {
  const [hover, setHover] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof onHover === "function" && hover != null) {
      onHover(hover);
    }
  }, [hover]); // eslint-disable-line

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default TypescriptPage;
