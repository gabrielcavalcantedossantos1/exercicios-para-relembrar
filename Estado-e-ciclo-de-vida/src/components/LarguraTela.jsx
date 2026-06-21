import { useState, useEffect } from "react";

const LarguraTela = () => {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [largura]);

  return (
    <div>
      <h1>Largura da tela: {largura}px</h1>
    </div>
  );
};

export default LarguraTela;
