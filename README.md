\*\* It finds all the document in the database
db.collectionName.find()

\*\* It finds a single data based on the query field name.
db.collectionName.findOne({name:"Arif"})

\*\*Here in 2nd curley braces fileds are being filtering which means only those field will be returned.Filed filtering also can be done using .projection({email:1,age,phone:1}) but it do not work with findOne({}) query method.

db.collectionName.findOne({name:"Arif"},{email:1,age:1,phone:1})

\*\*
db.studentMarks.find({English:{$eq:80}});
db.studentMarks.find({Math:{$ne:70}});
db.studentMarks.find({History:{$gt:60}});
db.studentMarks.find({History:{$gte:60}});
db.studentMarks.find({Accounting:{$le:50}});
db.studentMarks.find({Accounting:{$lte:50}});

(\*\*) multiple queries at onace

(here commar(,) works as and operator)

db.studentMarks.find({
class:"Eleven",
gender:"Female",
interests:{$in:["Reading","Writing","Gardening"]},
  age:{$gte:16,$lte:20}
},
{name:1,class:1,gender:1,interets:1,age:1}
).
sort({age:1})
