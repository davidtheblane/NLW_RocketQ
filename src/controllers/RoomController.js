const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;

    let roomId;
    let isRoom = true;

    while (isRoom) {
      // GERA O NUMERO DA SALA
      for (let i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }

      // VERIFICA SE O NUMERO JA EXISTE
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);

      isRoom = roomsExistIds.some((roomExistId) => roomExistId === roomId);

      // Se não existir
      if (!roomsExistIds) {
        // INSERE A SALA NO BANCO
        await db.run(`INSERT INTO rooms (
          id,
          pass
        ) VALUES(
            ${parseInt(roomId)},
            ${pass}
        )`);
      }
    }

    db.close();

    res.redirect(`/room/${roomId}`);
  },

  async open(req, res) {
    const db = await Database();
    const roomId = req.params.room;
    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 0`
    );
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 1`
    );

    res.render("room", {
      roomId: roomId,
      questions: questions,
      questionsRead: questionsRead,
    });
  },
};
