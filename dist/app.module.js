"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const graphql_1 = require("@nestjs/graphql");
const config_1 = require("@nestjs/config");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            graphql_1.GraphQLModule.forRootAsync({
                imports: [config_1.ConfigModule, AppModule],
                inject: [config_1.ConfigService],
                driver: apollo_1.ApolloDriver,
                useFactory: async (configService) => {
                    return {
                        installSubscriptionHandlers: true,
                        playground: true,
                        autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                        sortSchema: true,
                        subscriptions: {
                            'graphql-ws': true,
                            'subscriptions-transport-ws': true,
                        },
                        onConnect: (connectionParams) => {
                        },
                    };
                },
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map