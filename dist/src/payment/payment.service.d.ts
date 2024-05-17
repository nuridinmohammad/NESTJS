import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../prisma/prisma.service';
export declare class PaymentService {
    private configService;
    private prisma;
    private stripe;
    constructor(configService: ConfigService, prisma: PrismaService);
    createCheckoutSession(items: {
        id: number;
        quantity: number;
    }[]): Promise<{
        url: string;
    }>;
}
