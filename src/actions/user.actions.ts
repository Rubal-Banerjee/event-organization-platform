"use server"

import prisma from "@/db";
import { handleError } from "@/lib/utils";
import type { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

type ICreateUser = Omit<User, 'id'>;
type IUpdateUser = Omit<ICreateUser, 'email'>;

export const createUser = async (user: ICreateUser) => {
    try {

        const newUser = await prisma.user.create({
            data: user
        });

        return newUser;
        
    } catch (error) {
        handleError(error)
    }
}

export const getUserById = async (userId: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            throw new Error('User not found')
        }

        return user;

    } catch (error) {
        handleError(error)
    }
}

export const updateUser = async (user: IUpdateUser) => {
    try {

        const updatedUser = await prisma.user.update({
            where: {
                clerkId: user.clerkId
            },
            data: user
        })

        if (!updatedUser) throw new Error('User update failed')

    } catch (error) {
        handleError(error)
    }
}

export const deleteUser = async (clerkId: string) => {
    try {
        
        const userToDelete = await prisma.user.findUnique({
            where: {
                clerkId
            }
        })

        if(!userToDelete) {
            throw new Error('User not found')
        }

        const deletedUser = await prisma.user.delete({
            where: {
                id: userToDelete.id
            }
        })

        revalidatePath('/')

        return deletedUser;
        
    } catch (error) {
        handleError(error)
    }
}