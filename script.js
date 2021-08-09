// first
let item = ['5','25','89','120','36']
item.push ('javascript','python')
item.unshift ('html','css')
   console.log(item);

for (let i = 0; i < 9; i++)
   console.log(item [i]);
item.shift ()
item.pop ()
   console.log(item);

for ( let x = 0; x < 7; x++)
   console.log(item[x]);

// second

let fruits = ['ფორთოხალი','ბანანი','მსხალი']
for (let i = 0;i < fruits.length; i++)
   console.log(fruits[i]);
fruits.push ('ვაშლი','ანანასი')
fruits.unshift ('საზამთრო')
   console.log(fruits);

for (let i = 0; i < fruits.length ; i++)
   console.log(fruits[i]);

fruits.splice ( 2, 0, 'მანგო')
fruits.shift()
fruits.pop ()
   console.log(fruits);

for ( let i = 0; i< fruits.length; i++)
    console.log(fruits[i]);

// 3

let person = {
    firstname: 'mariami',
    lastname: 'iovashvili',
    age: 28,
    eyecolor: 'lightblue'
};
Object.keys(person).forEach(function(x) {


  console.log(x);
})

// 4

let girl = {
    firstname: 'mariami',
    lastname: 'iovashvili',
    age: 28,
    eyecolor: 'lightblue'
};
Object.values(girl).forEach(function(x) {
    console.log(x);
})

// 5

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array.map ( x => x / 3 )
  console.log(newArray);

// 6 

let items = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newItems = items.filter (y => y > 0  )
   console.log(newItems);




