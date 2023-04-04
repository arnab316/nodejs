const fruit  = [
   {Apple:20, Orange: 7, grape: 13},
   {Gurva:13, Lemon:5, Banna:6},
   {Orange:5,Pineapple:9,Apple:45}
];

 const count = {};
fruit.forEach(element =>{
    // console.log(element);
     
    for(each in element ){
    //  console.log(each);
    if(count[each]){
        count[each] =+ element[each]
    }else{
        count[each] = element[each]
    }
    } 
})
// console.log(count);

//every method
// if always return true and false

const fibonacci = [10,21,5,4,5,7];
const areNumber = fibonacci.every(
    (e) => typeof e == 'number'
)
// console.log(areNumber);


const stocks=[
    {name:'toyota', category: 'Cars'},
    {name:'BMW', category:'Cars'}
]
const areAllcars = stocks.every((stock)=>{
    stock.category === 'Cars'
})
// console.log(areAllcars);

//flatMap

const arr = [1,5,4,7,9,[45], [65,47], 6,[]]
// console.log(arr);

const flate= arr.flatMap(num => num);
// console.log(flate);

