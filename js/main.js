//get data and display
/*
const getProducts=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products`);//destructing//api
    console.log(data);
    const result=data.map(function(product){
        return `
            <div class="product">
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            </div>

        `;
    }).join('');
    console.log(result);
    document.querySelector('.products').innerHTML=result;
}
    getProducts();  
    */

//general function to get data
const getData=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products`);//destructing//api
    return data;
}
//specific dispaly func.
const displayProducts=async()=>{
    const data=await getData();
    console.log(data);

    const result=data.map((product)=>{
        return `
            <div class="product">
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <a href='description.html?id=${product.id}' >description</a> 
            </div>
            `;
    }).join('');

    document.querySelector('.products').innerHTML=result;
}

displayProducts();