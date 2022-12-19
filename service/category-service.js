const CategoryModel = require('../models/category-model');

class CategoryService {
    async getPopularCategories() {
        const categories = await CategoryModel.find();
        return categories;
    }

    async setCategories(){
        //const category = await CategoryModel.create({categoryName: 'Пиломатериалы', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category1 = await CategoryModel.create({categoryName: 'Линолеум', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category2 = await CategoryModel.create({categoryName: 'Обои', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category3 = await CategoryModel.create({categoryName: 'Инструменты', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category4 = await CategoryModel.create({categoryName: 'Товары для дачи', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category5 = await CategoryModel.create({categoryName: 'Окна', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category6 = await CategoryModel.create({categoryName: 'Двери', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category7 = await CategoryModel.create({categoryName: 'Сантехника', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category8 = await CategoryModel.create({categoryName: 'Краски', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category9 = await CategoryModel.create({categoryName: 'Электротовары', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})
        //const category10 = await CategoryModel.create({categoryName: 'Интерьер', categoryImage: 'https://i.imgur.com/w8rjX2Z.png'})      
        //return category
    }
}
module.exports = new CategoryService();