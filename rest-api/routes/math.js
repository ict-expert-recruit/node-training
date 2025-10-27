// Example: simple addition endpoint
module.exports = (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: "Missing parameters" });

  const sum = Number(a) + Number(b);
  res.json({ a: Number(a), b: Number(b), sum });
};