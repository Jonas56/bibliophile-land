function getAll(req, res) {
  res.status(200).json({ version: "0.1.0" });
}

module.exports = {
  getAll,
};
