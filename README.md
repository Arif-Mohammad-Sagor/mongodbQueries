** It finds all the document in the database
db.collectionName.find() 

** It finds a single data based on the query field name.
db.collectionName.findOne({name:"Arif"})

**Here in 2nd curley braces fileds are being filtering which means only those field will be returned.
db.collectionName.findOne({name:"Arif"},{email:1,age:1,phone:1})
