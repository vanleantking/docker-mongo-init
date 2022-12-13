db = connect("root:root@localhost:27017/admin");
db = db.getSiblingDB('adserver');
db.createUser({
'user': "adserver",
'pwd': "adserver123",
'roles': [{
    'role': 'dbOwner',
    'db': 'adserver'}]});
// user created

conn = connect("adserver:adserver123@localhost:27017/adserver");
db = db.getSiblingDB('adserver');
db.test.insertOne(
    {
      title: "The Favourite",
      genres: [ "Drama", "History" ],
      runtime: 121,
      rated: "R",
      year: 2018,
      directors: [ "Yorgos Lanthimos" ],
      cast: [ "Olivia Colman", "Emma Stone", "Rachel Weisz" ],
      type: "movie"
    }
)
// add new collection