function showAlert() {
    alert('you clicked the button')
}


function logHello() {
    console.log("Hello");
}

const dog = {
    name: 'fido' ,
    color: 'brown',
    weight: 500 ,
};

console.log(dog.name);
dog.name = 'rover'
console.log(dog.name);
dog.name = 'tim'
console.log(dog.name);

if(dog.name === 'rover') {
    console.log(dog.name);
    
} else if (dog.name === 'spot') {
    console.log('spot is a normal dog')
} else if (dog.name === 'tim') {
    console.log('tim is a human name')
} else {
    console.log('you are a normal dog')
}

const veggies = ['carrot', 'potato' , 'turnip']
// count up to ten
for (let i = 0; i <= 2; i++) {
  if(i === 2) {
    console.log(veggies[i])
  } 
}

    