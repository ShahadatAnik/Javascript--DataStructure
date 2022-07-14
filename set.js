/*
Set vs Array

Arrays can contain duplicate values whereas Sets cannot 
Insertion order is maintained in arrays but it is not the case with sets 
Searching and deleting an element in the set is faster compared to arrays
*/
/* */
/* */

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(4);

set.delete(2);
console.log("Set size: " + set.size);
set.clear();

for (const s of set) {
    console.log(s);
}
