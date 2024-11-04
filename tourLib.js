// Data model for the Tour API:

// {
//   "name": "Best of Paris in 7 Days Tour",
//   "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
//   "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
//   "price": "1,995"
// }

let toursArray = [];
let nextId = 1;

function getAll() {
    return toursArray;
}

function addOne(name, info, image, price) {
    if (!name || !info || !image || !price) {
        return false;
    }

    const newTodo = {
        id: nextId++,
        name,
        info,
        image,
        price
    };

    toursArray.push(newTodo);
    return newTodo;
}

function findById(id) {
    const numericId = Number(id);
    const tour = toursArray.find(item => item.id === numericId);
    return tour || false;
}

function updateOneById(id, updatedData) {
    const item = findById(id);
    if (item) {
        if (updatedData.name) item.name = updatedData.name;
        if (updatedData.info) item.info = updatedData.info;
        if (updatedData.image) item.image = updatedData.image;
        if (updatedData.price) item.price = updatedData.price;
        return item;
    }
    return false;
}

function deleteOneById(id) {
    const numericId = Number(id);
    const tour = findById(id)
    if (tour) {
        const initialLength = toursArray.length;
        toursArray = toursArray.filter(item => item.id !== numericId);
        return toursArray.length < initialLength;
    }
    return false;
}

if (require.main === module) {
    // getAll
    console.log("getAll called:", getAll());
    
    // addOne
    let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
    console.log("addOne called:", result)
    result = addOne("3 Days Tour"," Join us for the Best of Berlin!","https://www.course-api.com/images/tours/tour-x.jpeg", "2,005");
    console.log("addOne called:", result)
    
    // findById
    console.log("findById called:", findById(1));
    
    // updateById
    console.log("updateOneByID called", updateOneById(1, { name: "Rome", price: "3,487"}));
    console.log("findById called after item updated:", findById(1));
    
    // deleteOneById
    console.log("deleteOneById called", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const Tours = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Tours;