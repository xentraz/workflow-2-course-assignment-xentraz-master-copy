import { createProduct } from "./helpers/objectHelpers";
import { TypeHelper } from './helpers/typeHelpers';
import { makeUppercase } from './helpers/stringHelpers';

const newProduct: TypeHelper = createProduct
({
  id: 12, 
  code: "d f g",
  title: "This is the title of the product, it will be truncated"
});

console.log(newProduct)

console.log(makeUppercase("XeNtraz"));
