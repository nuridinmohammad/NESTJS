"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const payment_service_1 = require("./payment.service");
const payment_entity_1 = require("./entities/payment.entity");
const createSession_response_1 = require("./dto/createSession.response");
const createSession_input_1 = require("./dto/createSession.input");
let PaymentResolver = class PaymentResolver {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    createCheckoutSession(createPaymentInput) {
        return this.paymentService.createCheckoutSession(createPaymentInput);
    }
};
exports.PaymentResolver = PaymentResolver;
__decorate([
    (0, graphql_1.Mutation)(() => createSession_response_1.CreateSessionResponseDto),
    __param(0, (0, graphql_1.Args)({ name: 'items', type: () => [createSession_input_1.CreateSessionInput] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PaymentResolver.prototype, "createCheckoutSession", null);
exports.PaymentResolver = PaymentResolver = __decorate([
    (0, graphql_1.Resolver)(() => payment_entity_1.Payment),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentResolver);
//# sourceMappingURL=payment.resolver.js.map