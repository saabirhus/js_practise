// alert('hello world');

// console.log(1);
// console.log(2);
// console.log(3);

// let age = 25;
// let year = 2024;
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// points = 50;
//we use const if we dont want the value to be overwritten.
//it gives the error "Assignment to constant variable"
// console.log(points);

// var score = 75;
// console.log(score);

//strings 
// console.log('hello, world');

// let email = 'mario@thenetninja.co.uk';
// console.log(email);
// string concatentation (joining things together)
// let firstName = 'Brandon';
// let lastName = 'Sanderson';
// let fullName = firstName + ' ' + lastName;

// console.log(fullName);
//getting characters
// console.log(fullName[2])
//string length
// console.log(fullName.length);
//string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result)

// let index = email.indexOf('@');
// console.log(index)

// let email = 'mario@thenetninja.co.uk'
// let result = email.slice(0,10)
// console.log(result)

// let result = email.substr(4,10)

// let result = email.replace('m', 'w')

// let result = email.replace('n','w')
// console.log(result)

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi)

// math operators +, -, *, /, **, %
// console.log(10/2);
// let result = radius % 3;

// let result = pi * radius**2;

//order of operations - B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result)

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;

// likes +=10;
// likes -=5;
// likes *=2;
// likes/=2;

// console.log(likes)

// NaN - not a number
// console.log(5/ 'hello');
// console.log(5* 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result)

// template strings
// const title = 'Best Reads of 2024';
// const author = 'Mario';
// const likes = 30;

//concatentaiton way
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result)

//template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result)
//creating html templates  
// let html = `
// <h2>${title}</h2>   
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;
// console.log(html)

// let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1])

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20]
// console.log(random)

// console.log(ninjas.length)

//array methods

// let result = ninjas.join(',')
// let result = ninjas.indexOf('chun-li')
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();  

// console.log(result);

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

//booleans & comparisons
// console.log(true, false, 'true', 'false');

//methods can return booleans 
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad']

// let result = email.includes('!')
// let result = names.includes('bowser')

// console.log(result);

//comparison operators

// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';
// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun')
// console.log(name > 'Crystal')

// let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25); 
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//stric comparison (different types can be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//type conversion
let score = '100';

// score = Number(score)
// console.log(score + 1);
// console.log(typeof score)

// let result = Number('hello');
// let result = String(50);   
// let result = Boolean(0); 
let result = Boolean('0');

console.log(result, typeof result);