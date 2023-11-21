import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import { authConfig } from '@/authconfig'
import bcrypt from 'bcrypt'
import { connectDB } from './lib/utils'
import { User } from './lib/models'

const login = async credentials => {
  try {
    connectDB()

    const user = await User.findOne({ username: credentials.username })
    if (!user) throw new Error('Wrong credentials!')

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
    if (!isPasswordCorrect) throw new Error('Wrong credentials')

    return user
  } catch (error) {
    throw new Error('Failed to login!')
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username
        token.img = user.img
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username
        session.user.img = token.img
      }

      return session
    }
  }
})
