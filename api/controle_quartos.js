export default function handler(req, res) {
  // Simulação de dados
  const quartos = {
    "101": "livre",
    "102": "ocupado",
    "103": "limpeza"
  };

  res.status(200).json(quartos);
}
