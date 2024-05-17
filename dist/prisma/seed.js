"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_service_1 = require("./../src/prisma/prisma.service");
const products_1 = require("./products");
const prisma = new prisma_service_1.PrismaService();
(function seed() {
    products_1.default.forEach(async (product) => {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                brand: product.brand,
            },
        });
    });
})();
//# sourceMappingURL=seed.js.map