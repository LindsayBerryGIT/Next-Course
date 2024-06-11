import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/client"
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials"
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: 'Credentials',
            credentials:{
                email:{label:"Email",type:'email',placeholer:'Email'},
                password:{label:"Password",type:'password',placeholer:'Password'}
            },
            async authorize(credentials,req){
                if(!credentials!.email||!credentials!.password) return null;
                const user = await prisma.user.findUnique({where:{email:credentials!.email}})
                if(!user) return null;
                const passwordsMatched = await bcrypt.compare(credentials!.password,user.hashedPassword!);
                return passwordsMatched ?  user: null

            }
        }),
        GoogleProvider({
          clientId:process.env.AUTH_GOOGLE_ID!,
          clientSecret: process.env.AUTH_GOOGLE_SECRET!
      })
    ],
    session:{
        strategy:'jwt'
    }
  }