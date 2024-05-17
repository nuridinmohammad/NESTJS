import { PrismaService } from './../prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
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
