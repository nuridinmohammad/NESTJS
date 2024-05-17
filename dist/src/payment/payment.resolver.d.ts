import { PaymentService } from './payment.service';
import { CreateSessionInput } from './dto/createSession.input';
export declare class PaymentResolver {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createCheckoutSession(createPaymentInput: CreateSessionInput[]): Promise<{
        url: string;
    }>;
}
