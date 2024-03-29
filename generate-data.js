const faker = require('faker');
const fs = require('fs');

// Set locale to use Vietnamese
faker.locale = 'vi';

const randomCategoryList = (n) => {
  if (n <= 0) return [];

  const categoryList = [];

  // loop and pust category
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdDate: Date.now(),
      modifiedDate: Date.now(),
    };

    categoryList.push(category);
  });

  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return [];

  const productList = [];

  // random data
  for (const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        id: faker.datatype.uuid(),
        categoryId: category.id,
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: Number.parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        thumbnailUrl: faker.image.imageUrl(400, 400),
        createdDate: Date.now(),
        modifiedDate: Date.now(),
      };

      productList.push(product);
    });
  }

  return productList;
};

// IFFE
(() => {
  // random data
  const categoryList = randomCategoryList(4);
  const productList = randomProductList(categoryList, 5);

  // prepare db object
  const db = {
    categories: categoryList,
    products: productList,
    profile: {
      name: 'Po',
    },
  };

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully');
  });
})();
