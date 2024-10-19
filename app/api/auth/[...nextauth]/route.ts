// import NextAuth from "next-auth";
// import { Account, User as AuthUser } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import prisma from "@/utils/db";
// import { nanoid } from "nanoid";

// export const authOptions: any = {
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: any) {

//         try {
//           const user = await prisma.user.findFirst({
//             where: {
//               email: credentials.email,
//             },
//           });
//           if (user) {
//             const isPasswordCorrect = await bcrypt.compare(
//               credentials.password,
//               user.password!
//             );
//             if (isPasswordCorrect) {
//               return user;
//             }
//           }
//         } catch (err: any) {
//           throw new Error(err);
//         }
//       },
//     })
//     // GithubProvider({
//     //   clientId: process.env.GITHUB_ID ?? "",
//     //   clientSecret: process.env.GITHUB_SECRET ?? "",
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID ?? "",
//     //   clientSecret: process.env.GOOGLE_SECRET ?? "",
//     // }),
//     // ...add more providers here if you want. You can find them on nextauth website.
//   ],
//   secret: "54bff9a4c49bcc3f492b58260d5c4a4b079c63b4f1260cd86dce8afdaa5d5c91",
//   callbacks: {
//     async signIn({ user, account }: { user: AuthUser; account: Account }) {
//       if (account?.provider == "credentials") {
//         return true;
//       }
//       // if (account?.provider == "github") {

//       //   try {
//       //     const existingUser = await prisma.user.findFirst({ where: {email: user.email!} });
//       //     if (!existingUser) {

//       //       await prisma.user.create({
//       //           data: {
//       //             id: nanoid() + "",
//       //             email: user.email!
//       //           },
//       //         });
//       //       return true;
//       //     }
//       //     return true;
//       //   } catch (err) {
//       //     console.log("Error saving user", err);
//       //     return false;
//       //   }
//       // }

//       // if (account?.provider == "google") {

//       //   try {
//       //     const existingUser = await prisma.user.findFirst({where: { email: user.email! }});
//       //     if (!existingUser) {
//       //       await prisma.user.create({
//       //           data: {
//       //             id: nanoid() + "",
//       //             email: user.email!
//       //           },
//       //         });

//       //       return true;
//       //     }
//       //     return true;
//       //   } catch (err) {
//       //     console.log("Error saving user", err);
//       //     return false;
//       //   }
//       // }
//     },
//   },
  
// };

// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };






// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { nanoid } from "nanoid";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: any) {
//         try {
//           const user = await prisma.user.findFirst({
//             where: {
//               email: credentials.email,
//             },
//           });

//           if (user) {
//             const isPasswordCorrect = await bcrypt.compare(
//               credentials.password,
//               user.password!
//             );
//             if (isPasswordCorrect) {
//               // Exclude password from the returned user object
//               const { password, ...userWithoutPassword } = user;
//               return userWithoutPassword;
//             }
//           }
//           // If user not found or password incorrect
//           return null;
//         } catch (err: any) {
//           throw new Error(err.message || "Authentication failed");
//         }
//       },
//     }),
//     // Uncomment and configure other providers as needed
//     // GithubProvider({
//     //   clientId: process.env.GITHUB_ID ?? "",
//     //   clientSecret: process.env.GITHUB_SECRET ?? "",
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID ?? "",
//     //   clientSecret: process.env.GOOGLE_SECRET ?? "",
//     // }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET, // Use environment variable for security
//   callbacks: {
//     /**
//      * @param {object} params
//      * @param {object} params.token JWT token
//      * @param {object} params.user User object
//      */
//     async jwt({ token, user }) {
//       // Initial sign in
//       if (user) {
//         token.id = user.id;
//         token.role = user.role; // Add role to token
//         token.name = user.name; // Add role to token
//       }
//       return token;
//     },
//     /**
//      * @param {object} params
//      * @param {object} params.session Session object
//      * @param {object} params.token JWT token
//      */
//     async session({ session, token }) {
//       if (token && session.user) {
//         session.user.id = token.id as string;
//         session.user.role = token.role as string; // Add role to session
//         session.user.name = token.name as string; // Add name to session
//         session.user.additionalData = token.additionalData as string; 
//       }
//       return session;
//     },
//     /**
//      * Optionally, handle sign-in events
//      */
//     async signIn({ user, account }: { user: AuthUser; account: Account | null }) {
//       if (account?.provider === "credentials") {
//         return true;
//       }
//       // Handle other providers (e.g., GitHub, Google) if enabled
//       return true;
//     },
//   },
//   // Optionally, set pages for custom sign-in, sign-out, etc.
//   // pages: {
//   //   signIn: '/auth/signin',
//   //   signOut: '/auth/signout',
//   //   error: '/auth/error', // Error code passed in query string as ?error=
//   // },
// };



export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
            // select: {
            //   id: true,
            //   email: true,
            //   role: true,
            //   name:true,
            //   // additionalData: true, // Fetch additional fields as needed
            //   // Include other fields you want to retrieve
            // },
          });
console.log("user....",user);

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password!
            );
            if (isPasswordCorrect) {
              // Exclude password from the returned user object
              const { password, ...userWithoutPassword } = user;
              return userWithoutPassword; // Return all user details except password
            }
          }
          // If user not found or password incorrect
          return null;
        } catch (err: any) {
          throw new Error(err.message || "Authentication failed");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id; // Save user ID
        token.role = user.role; // Save user role
        token.name = user.name; // Save user name
        token.email = user.email; // Save user email
        // Add any additional user fields here
        token.additionalData = user.additionalData ; // Replace with actual fields if needed
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string; // Include user ID
        session.user.role = token.role as string; // Include user role
        session.user.name = token.name as string; // Include user name
        session.user.email = token.email as string; // Include user email
        // Include any additional fields here
        session.user.additionalData = token.additionalData; // Make sure this matches the expected type
      }
      return session;
    },
    async signIn({ user, account }: { user: AuthUser; account: Account | null }) {
      if (account?.provider === "credentials") {
        return true;
      }
      return true; // Handle other providers if needed
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

