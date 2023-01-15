const ProductModel = require('../models/product-model')
const SupplierModel = require('../models/supplier-model')

class ProductService {
    async getProducts() {
        const products = await ProductModel.find();

        return products;
    }

    async getProductById(id) {
        let product = await ProductModel.find({ _id: id })

        const { supplierName } = product[0];
        let supplier = JSON.stringify(supplierName);
        supplier = supplier.replace('"', '');
        supplier = supplier.replace('"', '');

        const supplierData = await SupplierModel.find({ _id: supplier })

        let obj = { product: product[0], supplier: supplierData[0].supplierName }

        return obj;
    }

    async getSearchProduct(name) {
        let product = await ProductModel.find({ 'productName': { '$regex': name, '$options': 'i' } })

        return product;
    }

    async getFilterProducts(minPrice, maxPrice, brands, supplier) {
        let products;
        if (brands.length == 0) {
            if (supplier.length == 0) {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice } });
            }
            else {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice }, supplierName: { $eq: supplier } });
            }
        }
        else {
            if (supplier.length == 0) {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice }, brandName: { $in: brands } });
            }
            else {
                products = await ProductModel.find({ productPrice: { $gte: minPrice, $lte: maxPrice }, brandName: { $in: brands }, supplierName: { $eq: supplier } });
            }
        }
        return products;
    }

    async setProducts() {
        const product = await ProductModel.create({
            productName: 'Шпатлевка масляно-клеевая 3кг Л-С', productPrice: 12.99, productDescription: `Штукатурка Волма Слой, 30кг
        Штукатурка на гипсовой основе для ручного нанесения.

                НАЗНАЧЕНИЕ:
            Выравнивание оснований в помещениях нормальной влажности перед нанесением декоративного слоя;
            Создание ровной поверхности на цементных, цементно- известковых, бетонных, кирпичных, гипсовых и гипсокартонных плоскостях.

            ПРЕИМУЩЕСТВА:
            Экономичная(расход продукта 8 - 9 кг на 1 кв.м, не требует покрытия шпаклевкой);
        Пластичная;
        Слой нанесения от 5 до 60мм;
        Можно использовать для создания декоративных поверхностей.
        
        ИНСТРУКЦИЯ ПО ПРИМЕНЕНИЮ:
        Подготовка основания:
        Поверхность нужно очистить и просушить.Вещества, ослабляющие сцепление с поверхностью, такие как жир,
            пыль и т.п.должны быть удалены.
        Температурный режим в помещении должен быть не ниже + 5 градусов.
            Основания, хорошо впитывающие влагу, предварительно обработать составом «ВОЛМА - Универсал» или
        «ВОЛМА - Интерьер».Гладкие(например, бетон) обработать составом «Волма - Контакт», просушить.
        Приготовление смеси:
        Емкость, в которой будут производить замес, и рабочий инструмент должны быть чистыми и сухими.
        В воду комнатной температуры постепенно всыпать смесь из расчета на 1 кг смеси – 0, 6 - 0, 65 л воды.
        Замешивать строительным миксером или дрелью с насадкой.Смесь должна стать однородной.
        Дать отстояться в течение нескольких минут и снова замешать.Раствор можно наносить в течение 20 минут.
            Нанесение:
        Смесь наносить ручным способом, используя железный шпатель.Разровнять h - образным правилом.
        Если состав наносится в два слоя, то на первый до высыхания наносятся насечки, после полного высыхания наносится
        второй слой.После схватывания последнего слоя(примерно через 60 минут) правилом трапецией подрезать неровности.
        Если в работе использовались маячки, рекомендуется их удалить и заделать оставшиеся углубления.
        Для того чтобы загладить поверхность нужно через 10 - 20 минут после подрезки смочить водой, используя губчатую терку,
            и затереть круговыми движениями.
        Далее загладить металлическим шпателем.
        Для того чтобы поверхность стала глянцевой нужно в течение суток, но не ранее трех часов, повторно смочить поверхность
        водой и загладить шпателем.

            РЕКОМЕНДАЦИИ:
        После окончания штукатурных работ основание рекомендуется прогрунтовать;
        Поверхности, которые не будут штукатуриться(пол, окна, мебель и т.п.) необходимо закрывать;
        Использованные инструмент и емкости необходимо вымыть водой после завершения работ.
        
        МЕРЫ ПРЕДОСТОРОЖНОСТИ:
        При работе защищать кожу, глаза и дыхательные пути.`, productAvailability: true, subcategoryName: '639f07d415a174d191b057a3', brandName: '63a0329badb30229c0c89d1a', supplierName: '63a0fd9c0824e33b208a3b9b'
        })
    }
}

module.exports = new ProductService();