import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';
export declare class ChatroomService {
    private readonly prisma;
    private readonly configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    getChatroom(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createChatroom(name: string, sub: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addUsersToChatroom(chatroomId: number, userIds: number[]): Promise<{
        users: {
            id: number;
            fullname: string;
            avatarUrl: string;
            email: string;
            emailVerifiedAt: Date;
            password: string;
            rememberToken: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getChatroomsForUser(userId: number): Promise<({
        users: {
            id: number;
            fullname: string;
            avatarUrl: string;
            email: string;
            emailVerifiedAt: Date;
            password: string;
            rememberToken: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        messages: {
            id: number;
            content: string;
            imageUrl: string;
            userId: number;
            chatroomId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    sendMessage(chatroomId: number, message: string, userId: number, imagePath: string): Promise<{
        chatroom: {
            users: {
                id: number;
                fullname: string;
                avatarUrl: string;
                email: string;
                emailVerifiedAt: Date;
                password: string;
                rememberToken: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
        } & {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        user: {
            id: number;
            fullname: string;
            avatarUrl: string;
            email: string;
            emailVerifiedAt: Date;
            password: string;
            rememberToken: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        content: string;
        imageUrl: string;
        userId: number;
        chatroomId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    saveImage(image: {
        createReadStream: () => any;
        filename: string;
        mimetype: string;
    }): Promise<string>;
    getMessagesForChatroom(chatroomId: number): Promise<({
        chatroom: {
            users: {
                id: number;
                fullname: string;
                avatarUrl: string;
                email: string;
                emailVerifiedAt: Date;
                password: string;
                rememberToken: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
        } & {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        user: {
            id: number;
            fullname: string;
            avatarUrl: string;
            email: string;
            emailVerifiedAt: Date;
            password: string;
            rememberToken: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        content: string;
        imageUrl: string;
        userId: number;
        chatroomId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    deleteChatroom(chatroomId: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
