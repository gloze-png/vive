import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picturesURL: v.string(), 
    },
  handler: async (ctx, args) => {
    // Check if the user already exists by email
    const existingUser = await ctx.db.query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

      if(!user[0]?.email)
      {
        // Create a new user
        const result =await ctx.db.insert('users',{
          name: args.name,
          email: args.email,
          picturesURL: args?.picturesURL,
          credit:4
        })
        return result;
        }
        return user[0];
      }

    
    })
 