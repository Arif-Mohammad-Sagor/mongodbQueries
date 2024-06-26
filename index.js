// It finds all the document in the database
db.collectionName.find();

// It finds a single data based on the query field name.
db.collectionName.findOne({ name: "Arif" });

// Here in 2nd curley braces fileds are being filtering which means only those field will be returned.Filed filtering also can be done using .projection({email:1,age,phone:1}) but it do not work with findOne({}) query method.
db.collectionName.findOne({ name: "Arif" }, { email: 1, age: 1, phone: 1 });

// Some comparison operators.
db.studentMarks.find({ English: { $eq: 80 } });
db.studentMarks.find({ Math: { $ne: 70 } });
db.studentMarks.find({ History: { $gt: 60 } });
db.studentMarks.find({ History: { $gte: 60 } });
db.studentMarks.find({ Accounting: { $le: 50 } });
db.studentMarks.find({ Accounting: { $lte: 50 } });

// multiple queries joining using implicit and operator
db.studentMarks
  .find(
    {
      class: "Eleven", //here commar(,) works as and operator
      gender: "Female",
      interests: { $in: ["Reading", "Writing", "Gardening"] },
      age: { $gte: 16, $lte: 20 },
    },
    { name: 1, class: 1, gender: 1, interets: 1, age: 1 }
  )
  .sort({ age: 1 });

db.studentMarks
  .find(
    {
      $or: [{ age: { $eq: 20 } }, { age: { $gte: 15 } }],
    },
    {
      age: 1,
    }
  )
  .sort({ age: 1 });
// problem solving
// problem-1
db.studentCollection.find({ age: { $gt: 30 } }, { name: 1, email: 1 });
// problem-2
db.studentCollection.find({ color: { $in: ["Maroon", "Blue"] } });
db.studentCollection.find({ $or: [{ color: "Maroon" },
   { color:"Blue" }] });
db.studentCollection.find({$and:[{skills:'javascript'},{skills:'java'}]})
db.studentCollection.find({address:{$exists:true}})
db.studentCollection.find({skill:{$size:0}})


db.studentCollection.find({ subjects: { $all: ["Math", "Science"] } });
// Quries operators for array elements
$in => matches any of the values specified
$all => matches all fo the values specified
$elemMatch => Matches documents that contain an array field with at least one element that matches all the specified query criteria.For example 
db.collection.find({ field(an array): { $elemMatch: { key1: value1, key2: value2 } } });

// Queries used for updating Document
$set => db.products.updateOne(
  {_id:1},
  {$set:{price:100}}
)// updates the existing documents
$unSet =>db.products.updateOne(
  {name:"Electronics"},
  {$unSet:{discount:1}}
)// removes the field document from a document where name Electronics
$addToSet =>db.products.updateOne(
  {id:1},
  {$addToSet:{sizes(which is an array):"xl"}}
)// updates an array elements with unique value
$push =>db.products.updateOne(
  {_Id:1},
  {$push:{items:{name:'Cooker',price:'400'}}}
)// appends one or more values to the end of an array
$pup=>db.products.updateOne(
  {_id:10},
  {$pop:{items:-1}} // here -1 means first and 1 means last
)// removes items from array
$pull=> db.products.updateOne({_id:11},{$pull:{subjects:'Math'}})// it will remove just Math from subjects array
$pullAll=>db.products.updateOne(
  {_id:12},
  {$pullAll:{subjects:['Math','Science']}}
)// will removes all the elements that matches "Math","Science"

db.studentCollection.updateOne(
  {_id:101},
  {$set:{email:"amccurry3@cnet.com"}}
)
db.studentCollection.updateOne(
  {email:"amccurry3@cnet.com"},
  {$addToSet:{skills:{name:"Python",level:'Begining',isLearning:true}}}
)
db.studentCollection.updateOne({id:101},{
  $push:{languages:'Spanish'}
})
db.studentCollection.updateOne(
  {id:202},
  {$pull:{skills:'Kotlin'}}
)