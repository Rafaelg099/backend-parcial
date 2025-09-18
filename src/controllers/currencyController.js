// Tasa fija de ejemplo (puedes integrar API real como fixer.io o exchangeratesapi.io)
const rates = {
  usd: { eur: 0.9, cop: 4000 },
  eur: { usd: 1.1, cop: 4500 },
  cop: { usd: 0.00025, eur: 0.00022 },
};

const convertCurrency = (req, res) => {
  const { value, from, to } = req.body;

  if (!rates[from] || !rates[from][to]) {
    return res.status(400).json({ error: "Conversión no soportada" });
  }

  const result = value * rates[from][to];
  res.json({ result });
};

module.exports = { convertCurrency };

