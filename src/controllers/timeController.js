const convertTime = (req, res) => {
  const { value, from, to } = req.body;
  let result;

  if (from === "hours" && to === "minutes") result = value * 60;
  else if (from === "minutes" && to === "hours") result = value / 60;
  else result = value;

  res.json({ result });
};

module.exports = { convertTime };

