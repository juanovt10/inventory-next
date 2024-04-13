import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile of google", profile);

        // create a user
        let userRole = "Google User";
        // check if that user exisits and has an email, the user roles goes to admin
        if (profile?.email == "juanovelasquez10@gmail.com") {
          userRole = "admin"
        }

        return {
          // keep all the user
          ...profile,
          // id as google does not provide an id
          id: profile.sub,
          // allocate the user role to the session role
          role: userRole,
        }
      }, 
      // variables to allow this to work -> add them in .env
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }), 
    GithubProvider({
      profile(profile) {
        console.log("Profile of github", profile);

        // create a user
        let userRole = "Github User";
        // check if that user exisits and has an email, the user roles goes to admin
        return {
          // keep all the user
          ...profile,
          // allocate the user role to the session role
          role: userRole,
        }
      }, 
      // variables to allow this to work -> add them in .env
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }), 
  ],

  // custom callbacks -> adds the roles to the jwts
  callbacks: {

    // add the tokens to the user in the server side
    async jwt({ token, user }) {
      if(user) token.role = user.role;
      return token;
    },
    // add the tokens to the user in the client side
    async session({ session, token }) {
      if(session?.user) session.user.role = token.role;
      return session;
    },
  }
}