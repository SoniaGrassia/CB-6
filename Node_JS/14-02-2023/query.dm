- Creo il DB -> use Esercizio_14_02_2023

- Creo una collection -> db.createCollection('books')

- Popolo il db con un singolo record:
db.books.insertOne(
  {
   "isbn": "9781593279509",
    "title": "Eloquent JavaScript, Third Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2018-12-04T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 472,
    "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "website": "http://eloquentjavascript.net/" 
  })
{
  acknowledged: true,
  insertedId: ObjectId("63eb9d5bc827cdc5d9f72ce4")
} 
-----------------------------------------------------------
- Popolo il db con più record contemporaneamente:
db.books.insertMany(
  [
     {
    "isbn": "9781491943533",
    "title": "Practical Modern JavaScript",
    "subtitle": "Dive into ES6 and the Future of JavaScript",
    "author": "Nicolás Bevacqua",
    "published": "2017-07-16T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 334,
    "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
    "website": "https://github.com/mjavascript/practical-modern-javascript"
  },
  {
    "isbn": "9781593277574",
    "title": "Understanding ECMAScript 6",
    "subtitle": "The Definitive Guide for JavaScript Developers",
    "author": "Nicholas C. Zakas",
    "published": "2016-09-03T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 352,
    "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    "website": "https://leanpub.com/understandinges6/read"
  },
  {
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "published": "2014-04-08T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 460,
    "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "website": "http://speakingjs.com/"
  },
  {
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-08-30T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  },
  {
    "isbn": "9798602477429",
    "title": "You Don't Know JS Yet",
    "subtitle": "Get Started",
    "author": "Kyle Simpson",
    "published": "2020-01-28T00:00:00.000Z",
    "publisher": "Independently published",
    "pages": 143,
    "description": "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
    "website": "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
  },
  {
    "isbn": "9781484200766",
    "title": "Pro Git",
    "subtitle": "Everything you neeed to know about Git",
    "author": "Scott Chacon and Ben Straub",
    "published": "2014-11-18T00:00:00.000Z",
    "publisher": "Apress; 2nd edition",
    "pages": 458,
    "description": "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
    "website": "https://git-scm.com/book/en/v2"
  },
  {
    "isbn": "9781484242216",
    "title": "Rethinking Productivity in Software Engineering",
    "subtitle": "",
    "author": "Caitlin Sadowski, Thomas Zimmermann",
    "published": "2019-05-11T00:00:00.000Z",
    "publisher": "Apress",
    "pages": 310,
    "description": "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
    "website": "https://doi.org/10.1007/978-1-4842-4221-6"
  }
    ]
  )
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63eb9da3c827cdc5d9f72ce5"),
    '1': ObjectId("63eb9da3c827cdc5d9f72ce6"),
    '2': ObjectId("63eb9da3c827cdc5d9f72ce7"),
    '3': ObjectId("63eb9da3c827cdc5d9f72ce8"),
    '4': ObjectId("63eb9da3c827cdc5d9f72ce9"),
    '5': ObjectId("63eb9da3c827cdc5d9f72cea"),
    '6': ObjectId("63eb9da3c827cdc5d9f72ceb")
  }
}
-------------------------------------------------------------------------------------
- Per avere tutti i record della collection -> db.books.find()

- Ricerca di un singolo record usando il titolo:
db.books.findOne({title: 'Pro Git'})
{
  _id: ObjectId("63eb9da3c827cdc5d9f72cea"),
  isbn: '9781484200766',
  title: 'Pro Git',
  subtitle: 'Everything you neeed to know about Git',
  author: 'Scott Chacon and Ben Straub',
  published: '2014-11-18T00:00:00.000Z',
  publisher: 'Apress; 2nd edition',
  pages: 458,
  description: 'Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.',
  website: 'https://git-scm.com/book/en/v2'
}

- Ordinare i record in ordine decrescente secondo il titolo -> db.books.find().sort({title: -1})

- Ordinare i record in ordine crescente secondo il titolo -> db.books.find().sort({title: 1})

- Numero dei record -> db.books.countDocuments() --> output: 8

- Numero di record che presentano la stessa casa editrice -> db.books.find({publisher: "O'Reilly Media"}).itcount() --> output: 3

- Output dei primi 3 record -> db.books.find().limit(3)

- Ricerca di un record e richiesta di visualizzare solo un campo:
db.books.find({title:'Speaking JavaScript'}, {description: 1})
{
  _id: ObjectId("63eb9da3c827cdc5d9f72ce7"),
  description: 'Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.'
-------------------------------------------------------------------------------------------------
- Ricerca di un record e richiesta di visualizzazione di tutti i campi tranne 'description':
db.books.find({title:'Speaking JavaScript'}, {description: 0})
{
  _id: ObjectId("63eb9da3c827cdc5d9f72ce7"),
  isbn: '9781449365035',
  title: 'Speaking JavaScript',
  subtitle: 'An In-Depth Guide for Programmers',
  author: 'Axel Rauschmayer',
  published: '2014-04-08T00:00:00.000Z',
  publisher: "O'Reilly Media",
  pages: 460,
  website: 'http://speakingjs.com/'
}
-------------------------------------------------------------------------------------------------
- Modifica di un record:
db.books.updateOne({title:"Eloquent JavaScript, Third Edition"},
{
  
  $set: {
    subtitle: "A modern introduction to programming whit JavaScript"
  }
})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
-----------------------------------------------------------------------------------------------
-Modifica di più record contemporaneamente che presentano il dato publisher in comune:
db.books.updateMany({publisher: "O'Reilly Media"},
{
  $set: {
    pages: '100'
  }
}
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
------------------------------------------------------------------------------------------------
- Cancellazione di un singolo record:
db.books.deleteOne({title: 'Prova'})
{
  acknowledged: true,
  deletedCount: 1
}
----------------------------------------------------------------------------------------------
- Cancellazione di 2 record con lo stesso titolo:
db.books.deleteMany({title: 'Prova2'})
{
  acknowledged: true,
  deletedCount: 2
}
