const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3001;
const messCo = require("./controllers/messages_controller");

app.route("/api/messages").get(messCo.read).post(messCo.create);

app.put("/api/messages/:id", messCo.update);
app.delete("/api/messages/:id", messCo.delete);

app.use(express.static(__dirname + "/../public/build"));

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
