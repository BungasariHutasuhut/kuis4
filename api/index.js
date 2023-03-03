import express from "express";

const app = express();

//route
app.get("/api/get", (req, res) => {
  res.send("assalamualaikum");
});

app.listen(3000, () => {
  console.log("Berhasil !!");
});
