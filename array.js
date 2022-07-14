const cars = ["BMW", "Audi", "Mercedes"];

cars.push("Ferrari"); // add new element to the end of the array
cars.unshift("Ferrari"); // add to the beginning
cars.pop(); // remove last element
cars.shift(); // remove first element

for (const car of cars) {
    console.log(car);
}

/*
# Array Big-O time complexity

Insert/remove from end - O(1)
Insert/remove from beginning - O(n)

Access- - 0(1)
Search - O(n)
Push/pop - O(1)

Shift/unshift/concat / slice / splice - O(n)

forEach/map/filter/reduce - O(n)

*/
