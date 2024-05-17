import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<{
        id: number;
        name: string;
        price: number;
        description: string;
        image: string;
        brand: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        price: number;
        description: string;
        image: string;
        brand: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
