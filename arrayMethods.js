/*This file of code have all methods we are instructed to learn 
on the new employee training with. Considering the kind of work
we perform on this job position, I will try to use possible
LMS examples as I go over each method */

//The following arrays will be reused several times 
//during the course o f this part of the training
var grades = [100, 90, 80, 70, 60];
var students = ['Lucas', 'Cameron', 'Kyle', 'Sarah', 'Lisa'];
var hasPassed = [true, false, true, true, false];
var isQuestionsCorrect = [true, false, true, true, false];
/*------------------- PUSH ------------------------*/
/* 
1. This method pushes an element into the end of an array. The return 
value of this function is the new length generated
2. Yes, it changes the lenght of the current array by adding one
element at the end
3. The new lenght of the updated array
4. If I need to add, for example, one student into the array of students that is read
in a certain class, this method would do this properly. Folows the example
*/
function pushArray() {  
    console.log('Before adding Julie, the array should look like this: ' + students);
    console.log('Initial lenght of the array = ' + students.push());
    students.push('Julie');
    console.log('After adding Julie, notice that she will appear at the end' + students);
    console.log('Final lenght of the array = ' + students.push());
}
//  pushArray();

/*------------------- POP ------------------------*/
/* 
1. This method removes an element into the end of an array. The return 
value of the last element of the array popped
2. Yes, it changes the lenght of the current array by removing the last
element
3. The element popped out
4. If I need to remove, for example, the last grade of the semester for a certain student 
this method can be used. Consider the student that has 5 grades for the semester. 
We only want to keep the first 4. 
*/
function popArray() {
    console.log('Before popping the array of grades, this is how the array looks ' + grades);
    console.log('Initial lenght of the array = ' + grades.push());
    grades.pop();
    console.log('After popping the array, this is the new array. Notice 60 isnt there anymore ' + grades);
    console.log('Final lenght of the array = ' + grades.push());
}
// popArray();

/*------------------- SHIFT ------------------------*/
/* 
1. This method shifts the array from the beginning. Exactly like popping an array, but getting 
the first element, instead. It returns the element that was shifted away.
2. Yes, it changes the lenght of the current array by removing the last
element
3. The element shifted
4. If I need to remove, for example, the first grade of the semester for a certain student 
this method can be used. Consider the student that has 5 grades for the semester. 
We only want to keep the last 4. Maybe this first one was just a pre-test with 
no implications for the actual final grade. 
*/
function shiftArray() {
    console.log('Before shifting the array of grades, this is how the array looks ' + grades);
    console.log('Initial lenght of the array = ' + grades.push());
    grades.shift();
    console.log('After shifting the array, this is the new array. Notice 100 isnt there anymore ' + grades);
    console.log('Final lenght of the array = ' + grades.push());
}
// shiftArray();


/*------------------- UNSHIFT ------------------------*/
/* 
1. This method inshifts the array from the beginning. Opposite of popping or shifting an array, it inserts an element(s)
to the beginning of the array.
2. Yes, it changes the lenght of the current array by adding more elements or element.
3. The new lenght of the array
4. If I need to add, for example two grades into the beginning of the course that haven't been yet added. Maybe it was
an extra credit activity that isn't normally credited by canvas, I can use this method
in order to successfully add these grades into the array.
*/
function unshiftArray() {
    console.log('Before unshifting the array of grades, this is how the array looks ' + grades);
    console.log('Initial lenght of the array = ' + grades.push());
    grades.unshift(50, 50);
    console.log('After unshifting the array, this is the new array.Two extra 50`s appear at the beginning ' + grades);
    console.log('Final lenght of the array = ' + grades.push());
}
// unshiftArray();

/*------------------- SLICE ------------------------*/
/* 
1. This method returns a copy of the original array, but slices it according
to the two parameters we put on. These paramaters would be the index of the elements
we want to slice to our use, the end not included. Ex(slice(2,4)) gets the index 2 and 3 of the array into
a new array. 
(Which represent elements 3 and 4 of the array.)
2. No, the original array stays intact
3. The array sliced, according to the parameters given.
4. Suppose I need to get an array of answers of a test, true being correct and false being incorrect,
and I want to only use 2 questions of the test for grading purposes, without forgetting about the 
other ones. The method slice would be ideal for the situation once it only returns a copy with the
elements I want.
*/
function sliceArray() {
    console.log('The array unsliced looks like this:  ' + isQuestionsCorrect);
    console.log('Initial lenght of the array = ' + isQuestionsCorrect.push());
    console.log('When I slice the array, it returns a new array according to my paramaters. Note index 2 and 3 were the only selected ' + isQuestionsCorrect.slice(2, 3));
    console.log('Lenght of the sliced array = ' + isQuestionsCorrect.slice(2, 4).length);
}
// sliceArray();

/*------------------- SORT ------------------------*/
/* 
1. This method sorts the elements of an array and returns the array already sorted. 
By default the sorting is made by the UNICODE string value of each element.
2. Yes, it changes the order of elements to a sorted format
3. The own array now sorted.
4.
   a. Without a compare function: Suppose I need to create a classroll and to be uniform, I want to sort by 
student's first name, alphabetical order. Using the sort method will do the job
for us and provide a new array with the expected order.
*/
function sortArrayDefault() {
    console.log('The array unsorted looks like this:  ' + students);
    console.log('Initial lenght of the array = ' + students.length);
    students.sort();
    console.log('When I sort the array, this array is now in alphabetical order and it becomes ' + students);
    console.log('Lenght of the sliced array is the same =  ' + students.length);
}
// sortArrayDefault();


/* 4.
   b. Suppose I want to sort grades for a semester, from lower to higher, I would use this method as well.
   Because it uses the UNICODE string value as a default for comparison, however, I will need to overload the function
   and write a function that will generate an accurate comparison. In this case, sorting numbers.  */
function sortArrayWithFunction() {
    console.log('The array unsorted looks like this:  ' + grades);
    console.log('Initial lenght of the array = ' + grades.length);
    grades = grades.sort((a, b) => {
        return a - b;
    })

    console.log('When I sort the array, this array is now in order from lower to higher number and it becomes ' + grades);
    console.log('Lenght of the sorted array stays the same =  ' + grades.length);
}
// sortArrayWithFunction();

/*------------------- CONCAT ------------------------*/
/* 
1. This method merges the elements of two arrays and returns a new array with the results of it. 
2. No, it just creates a third array with all elements combined 
3. A third array that has the combiened elements of the first two arrays.
4. Suppose I need to merge two classes, because the one of them only got 2 students registered at it, and it wouldn't
be worth it to have a professor to teach only one class. I want to combine the students on these two classes.
*/
function concatArray() {
    var firstClass = students; // what we already have
    var secondClass = ['Amy, Linda']; // what is being added/combined/merged
    var combinedClass = firstClass.concat(secondClass);
    console.log("notice that Amy and Linda were added at the end of the combined class" + combinedClass);
}
//  concatArray();

function ConcatArrayObjs() {
    var obj1 = {
        city: 'Curitiba',
        name: 'Lucas'
    }

    var obj2 = {
        city: 'Rexburg',
        name: 'Matt'
    }

    var obj3 = {
        city: 'NY',
        name: 'Sarah'
    }

    const test = [obj1, obj2];
    const test2 = test.concat(obj3);
    console.log(test2);
    test[0].city = 'SLC';
    //
    console.log(test2);
}
ConcatArrayObjs();

/*------------------- FOREACH ------------------------*/
/* 
1. Like a for loop, this method executes a function for each array element.
2. It might according to what is inside this function, but the method itself doesn't change anything
3. Doesn't return anything
4. Let's say I want to curve the grades and give an extra 10% to all grades received this semester. I will
use a foreach to access and change each element of the array
*/
function usingForEach() {
    var newGrades = [];
    grades.forEach((grade) => {
        newGrades.push(grade + (grade * 0.1))
    })
    console.log(newGrades);
}
// usingForEach();

/*------------------- INCLUDES ------------------------*/
/* 
1. Determines if a certain string/value is found inside an array
2. No changes
3. Returns a bool.
4. Let's suppose that I want to see if anyone in the class got 100% as a final score 
in a grade array. I can use include to look for '100' throughout all grades. If it is found, 
this method will return true, if not, returns false.
*/
function isIncluded() {
    console.log(grades.includes(100));
}
// isIncluded();

/*------------------- EVERY ------------------------*/
/* 
1. Determines if all elements of a certain array obey a certain condition
2. No changes
3. Returns a bool.
4. Let's suppose I want to look for a specific range of grades ( > 60) as a passing grade.
I want to see if all students in a class passed at the end of the semester
to do that, I will call every. If all students passed, it will return true,
otherwise, returns false;
*/
function everyonePassed(grade) {
    return grade > 59;
}

function isAll() {
    console.log(grades.every(everyonePassed));
}
// isAll();

/*------------------- SOME ------------------------*/
/* 
1. Similar to the every method, but instead it determines if at least one element of a certain array obeys a certain condition
2. No changes
3. Returns a bool.
4. Let's suppose I want to look for a specific range of grades(90-100) to award a gift.
I want to see if at least one student in a class complied to this conditions. If yes, it will return true,
otherwise, it will return false;
*/
function atLeastOne(grade) {
    return grade > 89 && grade < 100;
}

function areSome() {
    console.log(grades.some(atLeastOne));
}
// areSome();

/*------------------- FILTER ------------------------*/
/* 
1. Filter as the name says, filters an array. Depending on a condition that I determine,
I can call filter and it will provide me with an array of filtered elements in this array.
2. No changes
3. Returns a new filtered array.
4. Suppose I want to see all students in a class that have their first name
starting with a 'L' letter. if I apply filter for the first index of each
string element of students, I can find and generate an array with all students
that will start with their names with the letter 'L'
*/
function findNames(name) {
    if (name[0] == 'L') {
        return true;
    }
}

function filterArray() {
    const newArray = students.filter(findNames);
    console.log(newArray);
}
// filterArray();

/*------------------- MAP ------------------------*/
/* 
1. Mapping an array is very similar to using a forEach. 
For Instance, depending on the situation, both methods
could be used. Essentially, when mapping an array, we iterate
through each index of the array, and execute a determined function,
and as a result, it returns a new array that stores the results for each 
iteration
2. No changes
3. Returns a new mapped array, according to specifications given on the map function.
4. Let's suppose I want to change each grade for a certain student to apply an extra
credit activity. I will call the method .map() and provide enough information to give
the student an extra 5 points for each grade, and then display the updated grades.
*/
function mapGrades() {
    console.log('Initial grades => ' + grades)
    const updatedGrades = grades.map(grade => grade + 5);
    console.log("Final grades => " + updatedGrades);
}
// mapGrades();


/*------------------- REDUCE ------------------------*/
/* 
1. The reduce method uses a reduce function that we provide
on each element of the array, and at the end returns one output value. 
This can be done by adding, subtracting, manipulating each element of the array
in whatever way we want. For simplicity, we will use sum for this.
2. No changes
3. Returns one single value element, result of the results of all elements of the original
array being manipulated through a function we wrote.
4. 
    4.1 Supposedely I want to add all grades of a student because the class
became a point based system, instead of wheited. I will use the reduce
method to add all points, with no acumulator value to start off.
    4.2 Inside the same function I will have another console.log
but this time, the reducer has an int of 5 as an accumulator value
*/
const reducer = (total, currentValue) => total + currentValue;

function reduceGradesToPoints() {
    //Notice the total is the adition of all grades
    console.log(grades.reduce(reducer));
    // Notice that the total is the adition of all grades + 5
    console.log(grades.reduce(reducer, 5));

}
// reduceGradesToPoints();


/*------------------- JOIN ------------------------*/
/* 
1. The join method is very similar to concat() with the adition that as it
merges two arrays, it will add a character or whatever we request as a string, between
each element of the new array
2. No changes
3. Returns a string, concated** that will have the divisors we choose
to declare between each element
4. If I would like to get a list of grades as a string to display at a website
divded by '-' to make it organized, I could use this method.
*/

function joinElements() {
    //notice this is not a string and there are no -'s between them
    console.log(grades);
    //notice what happens
    console.log(grades.join(' - '))
}
// joinElements();

/*------------------- FLAT ------------------------*/
/* 
1. The flat method will create a new array, and join the elements that before were 
nested into each element
2. No changes
3. Returns a new array with the nested elements in there
4. If, on a certain quiz, there were 3 attempts, and I want to take an average of all of them as 
if they were a separate test with the same wheight, I could use this method to unest the attempts
*/

function useFlatMethod() {
   var tests = [80, 90, 50, [20, 30]];
   console.log(tests);
   //the magic happens now, the 20 and 30 will be unested into a new array
   var newTests = tests.flat();
   console.log(newTests);
}
// useFlatMethod();

/*------------------- SPLICE ------------------------*/
/* 
1. The splice method will modify an array by removing/replacing/adding elements into the array
2. Changes the original array, as specified.
3. Returns an array of all removed elements, if there were any. Otherwise, returns an empty array,
because no elements were removed
4. If I want to remove the second student on my list of students(array students), I can use this method, and the
second student will be removed from it.
*/

function useSpliceMethod() {
   console.log(students);
   students.splice(1, 1);
   console.log(students);
 }
 useSpliceMethod();