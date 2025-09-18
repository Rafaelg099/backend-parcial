const convertWeight = (req, res) => {
  const { value, from, to } = req.body;
  let result;

  if (from === "kg" && to === "lb") result = value * 2.20462;
  else if (from === "lb" && to === "kg") result = value / 2.20462;
  else result = value;

  res.json({ result });
};

module.exports = { convertWeight };
