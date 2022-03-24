import { apiUrl } from './helpers/api/index';
import { query } from './helpers/api/apiQuery.graphql';
import { orderBy } from "lodash";

console.log(query);

const getData = async () => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  const newData = data.data.gen1_species
  const orderedProducts = orderBy(newData, ["id"], ["desc"]); 

  var htmlElm = document.querySelector('.results')

  console.log(orderedProducts)
  return orderedProducts.forEach((product) => {
    return htmlElm.innerHTML += `
    <p>${product.name}</p>
    <p>${product.id}</p>
    `;
  })
};

getData();
