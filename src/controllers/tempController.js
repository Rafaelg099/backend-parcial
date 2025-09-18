const convertTemp = (req, res) => {
  const { value, from, to } = req.body;
  let result;

  if (from === "celsius" && to === "fahrenheit") result = (value * 9) / 5 + 32;
  else if (from === "fahrenheit" && to === "celsius") result = ((value - 32) * 5) / 9;
  else result = value;

  res.json({ result });
};

module.exports = { convertTemp };

