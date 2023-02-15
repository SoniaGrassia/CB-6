const { MongoClient } = require("mongodb");

// connetto l'url
const url =
  "mongodb+srv://sonia:24021994@cluster0.x2d1llm.mongodb.net/esercizio?retryWrites=true&w=majority";
const client = new MongoClient(url);

// database
const dbName = "School";

async function main() {
  // metodo connect per connettermi al server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection1 = db.collection("students");
  const collection2 = db.collection("courses");

  //-> inserimento record multipli nella collection students
  /*
  const insertStudents = await collection1.insertMany([
    {
      nome: "Sonia",
      cognome: "Grassia",
      matricola: 123456,
      corsi: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
      esami: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
    },
    {
      nome: "Dennis",
      cognome: "Castiglione",
      matricola: 7891011,
      corsi: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
      esami: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
      ],
    },
    {
      nome: "Valentina",
      cognome: "Urzì",
      matricola: 7565467,
      corsi: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
      esami: [
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
    },
    {
      nome: "Greta",
      cognome: "Tomasoni",
      matricola: 098997960,
      corsi: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
      esami: [
        "linguistica computazionale",
        "metodi quantitativi per l'analisi dei dati testuali",
        "vocabolari digitali",
        "banche dati e trattamenti digitale dei testi",
        "Basi di dati, ontologie e web semantico",
        "informazione e big data",
      ],
    },
    {
      nome: "Ettore",
      cognome: "Sanfilippo",
      matricola: 7566458833,
      corsi: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
      esami: [
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "vocabolari digitali",
        "banche dati e trattamenti digitale dei testi",
        "Basi di dati, ontologie e web semantico",
        "informazione e big data",
      ],
    },
    {
      nome: "Luisa",
      cognome: "Zizzo",
      matricola: 123456,
      corsi: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
        "banche dati e trattamenti digitale dei testi",
        "storia ed epistemologia delle macchine",
        "Basi di dati, ontologie e web semantico",
        "biblioteche digitali",
        "informazione e big data",
        "intelligenza artificiale",
      ],
      esami: [
        "linguistica computazionale",
        "epistemologia",
        "metodi quantitativi per l'analisi dei dati testuali",
        "corpus linguistics",
        "vocabolari digitali",
        "digital marketing",
      ],
    },
  ]);
  console.log("Inserted students =>", insertStudents);
*/

  //-> inserimento record ultipli nella collection courses
  /*
  const insertCourses = await collection2.insertMany([
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "linguistica computazionale",
      docente: ["Salvo Faro", "Lorenzo Di Silvestro"],
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "epistemologia",
      docenti: "Marco Mazzone",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "metodi quantitativi per l'analisi dei dati testuali",
      docenti: "Antonio Di Silvestro",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "corpus linguistics",
      docente: "Marco Venuti",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "Vocabolari digitali",
      docente: "Antonio Sichera",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "Digital Marketing",
      docente: "Salvo Grasso",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "banche dati e trattamento digitale dei tesi",
      docente: "Salvatore Arcidiacono",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "storia ed epistemologia delle macchine",
      docente: "Luigi Ingalisi",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "basi di dati, ontologie e web semantico",
      docente: ["Giuseppe Grasso", "Marianna Nicolosi"],
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "biblioteche digitali",
      docente: "Simona Inserra",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "informazione e big data",
      docente: "Salvatore Giuffrida",
    },
    {
      nome_corso: "scienze del testo per le professioni digitali",
      materia: "intelligenza artificiale",
      docente: "Daniela Giordano",
    },
  ]);
  */

  //-> tutti i record della collection1
  /*
  const findStudents = await collection1.find({}).toArray();
  console.log("Found students =>", findStudents);
  */

  //-> tutti i record della collection2
  /*
  const findCourses = await collection2.find({}).toArray();
  console.log("Found courses =>", findCourses);
  */

  //-> filtro query per trovare tutti i record che soddisfano la query.
  /*
  const filteredStudents = await collection1
    .find({ esami: "epistemologia" })
    .toArray();
  console.log(
    "Found students filtered by { corsi: linguistica computazionale} =>",
    filteredStudents
  );
  */

  //filtro query per trovare solo un record che soddisfa la query
  /*
  const filteredStudent = await collection1.findOne({
    corsi: "linguistica computazionale",
  });
  console.log(
    "Found student filtered by {corsi: linguistica computazionale} =>",
    filteredStudent
  );
  */

  //-> modifico un record nella collection students aggiungendo un nuovo dato.
  /*
  const updateStudent = await collection1.updateOne(
    { nome: "Sonia" },
    { $set: { status: "Studente Laureato" } }
  );
  console.log("Updated student =>", updateStudent);
*/

  //-> modifico più record nella collection courses aggiungendo un nuovo dato.
  /*
  const updateCourses = await collection2.updateMany(
    { nome_corso: "scienze del testo per le professioni digitali" },
    { $set: { università: "Università degli studi di Catania" } }
  );
  console.log("Update courses =>", updateCourses);
  */

  //-> aggiorno un'array dentro la collection students
  /*
  const updateEsame = await collection1.updateOne(
    { nome: "Dennis" },
    { $push: { esami: "biblioteche digitali" } }
  );
  console.log("Update esame =>", updateEsame);
  */

  //--------------------------------------------------------------------------------------
  //-> rimuovo un singolo record della collestion students che corrisponde alla query
  /*
  const deleteStudent = await collection1.deleteOne({ nome: "Luisa" });
  console.log("Deleted documents =>", deleteStudent);
*/
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
