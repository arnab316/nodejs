// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=> response.json())
// .then(json =>console.table(json));


// const  url =  fetch('https://jsonplaceholder.typicode.com/users');
// const  data =  url.json();

//  const getdata = async()=>{


//     const  url = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(url.status);
// const  data = await url.json();
// console.debug(data);
// }
// getdata();



// let a = 'apple'
// const b = 1007;
// var c = ['aass', 20, {abv:20}]

// console.log({a,b,c});


(async()=>{
    const  url = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(url.status);
const  data = await url.json();
console.table(data);

})();


