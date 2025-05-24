import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(), 
    },
  handler: async (ctx, args) => {
    // Check if the user already exists by email
    const existingUser = await ctx.db.query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

      if(!user[0]?.email)
      {
        // Create a new user
        const userData={
          name:args?.name,
          email:args?.email,
          pictureURL: args?.pictureURL,
          credits:4
        }
        // we merge the user data with the default user data
        const result = await ctx.db.insert('users', userData)
        
        return userData;
        }
        return user[0];
      }

    
    })
 