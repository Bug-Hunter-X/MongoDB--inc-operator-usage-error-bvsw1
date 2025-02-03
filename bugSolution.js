```javascript
// Correct usage of $inc operator
db.collection.updateOne({fieldName: "value"}, {$inc: {fieldName: 1}});
```