const express = require("express");
const app = express();

app.listen(3000, function() {
  console.log(`Server rodando na porta 3000`);
});

app.get("/", (req, res) => {
  res.send({ message: "Não" });
});
