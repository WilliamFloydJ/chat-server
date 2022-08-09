let messageArr = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messageArr.push({ id, text, time });
    id++;

    res.status(200).send(messageArr);
  },
  read: (req, res) => {
    res.status(200).send(messageArr);
  },
  update: (req, res) => {
    const { text } = req.body;
    const id = req.params.id;

    console.log(messageArr);

    const foundInd = messageArr.findIndex((elem) => elem.id == id);
    message = messageArr[foundInd];
    messageArr[foundInd] = {
      id: message.id,
      text: text || message.text,
      time: message.time,
    };
    res.status(200).send(messageArr);
  },
  delete: (req, res) => {
    const id = req.params.id;
    const foundInd = messageArr.findIndex((elem) => elem.id == id);
    messageArr.splice(foundInd, 1);
    res.status(200).send(messageArr);
    console.log(messageArr);
  },
};
