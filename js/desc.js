const getProduct=async()=>{
   // const {data}= await axios.get(`https://fakestoreapi.com/products/1`);// جبنا الداتا بس لرقم 1وكده ما بنفع
   // id'sدي الطريقة بتجيب كل ال 
    const params=new URLSearchParams(window.location.search);
    const id=params.get('id');
    const {data}= await axios.get(`https://fakestoreapi.com/products/${id}`);
   return data;

}
const displayProduct=async()=>{
const data=await getProduct();
/*
const rating=data.rating.map((rate)=>{
    return `
    <p>${rate}</p>
    `;
}).join('');
*/

const result =`
<h2>${data.title}</h2>
 <img src="${data.image}" alt="${data.title}">
 <p>${data.category}</p>
 <p>price: ${data.price}</p>
 <p>${data.description}</p>
 
  <p>rate: ${data.rating.rate}</p>
  <p>count: ${data.rating.count}</p>

`;
console.log(data);
// document.querySelector('.rating').innerHTML=rating;
document.querySelector('.product').innerHTML=result;
}

displayProduct();