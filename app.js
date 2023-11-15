

// fetch("https://fakestoreapi.com/products")

// .then(response => response.json()) 

// .then(data => console.log(data))


// .catch(err=> console.log(err))



// fetch("https://fakestoreapi.com/products")

// .then(response => response.text()) 

// .then(data => console.log(JSON.parse(data)))


// .catch(err=> console.log(err))




// stringify 

// parse(strData)


// alternative to fetch => axios

// import axios from 'axios';

// axios.get("https://fakestoreapi.com/products")
// .then(response => console.log(response.data)) 
// .catch(err=> console.log(err))



// Post: 

import axios from "axios"

let product = {
    title: "Samsung Galaxy S20",
    price: 1000,
    description: "Samsung Galaxy S20",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

// fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(product)
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err=> console.log(err))

// axios.post("https://fakestoreapi.com/products", product)
// .then(response => console.log(response.data))
// .catch(err=> console.log(err))