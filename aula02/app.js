const fs = require("fs");

fs.writeFileSync(
   "mensagem.txt",
   "Essa é a nossa segunda mensagem escrita com o módulo fs!"
);


const fs2 = require("fs");
fs2.appendFileSync('mensagem.txt', '\nIsto é uma atividade de NODE', 'utf8');