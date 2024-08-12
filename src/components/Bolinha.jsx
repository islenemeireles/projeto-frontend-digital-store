const Bolinha = () => {
  const numBolinhas = 80;
  const radius = 50;
  const criarBolinhas = () => {
    const bolinhas = [];
    const gridSize = Math.ceil(Math.sqrt(numBolinhas));
    const step = (2 * radius) / gridSize;
    for (let i = 0; i < numBolinhas; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      const x = col * step - radius;
      const y = row * step - radius;
      const distance = Math.sqrt(x * x + y * y);
      if (distance <= radius) {
        bolinhas.push(
          <div
            key={i}
            className="bolinha"
            style={{
              left: `${50 + (x / radius) * 50}%`,
              top: `${50 + (y / radius) * 50}%`
            }}
          />
        );
      }
    }
    return bolinhas;
  };
  return (
    <div className="bola">
      {criarBolinhas()}
    </div>
  );
};
export default Bolinha;
