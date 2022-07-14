const obj = {
    name: "John",
    age: 30,
    isMarried: false,
    sayInfo: function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Married: " + this.isMarried);
    },
};

obj.sex = "M"; // add in object

console.log(obj);
obj.sayInfo();

/*
Object - Big-O time complexity

Insert - O(1)
Remove - O(1)
Access - O(1)

Search - O(n)

Object.keys()- O(n)
Object.values() - O(n)
Object.entries() - O(n)
*/
