import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getBusiness = query({
    args: { id: v.id("businesses") },
    handler: async (ctx, args) => {
        const business = await ctx.db.get(args.id)
        return business
    }
})

export const getBusinesses = query({
    handler: async (ctx) => {
        const businesses = await ctx.db.query("businesses").collect()
        return businesses
    }
})

export const getBusinesssesSortedByRating = query({
    handler: async (ctx) => {
    const businesses = await ctx.db
        .query("businesses")
        .withIndex("by_rating_and_reviews")
        .order("asc")
        .collect()

    return businesses
    }
})

export const postBusiness = mutation({
    args: { business: v.object({})},
    handler: async(ctx, args) =>{
        const businessId = await ctx.db.insert("businesses", args.business)
        return businessId
    }
})

export const updateBusinessLocation = mutation({
    args: {id: v.id("businesses"), location: v.string()},
    handler: async(ctx, args) => {
        await ctx.db.patch(args.id, {location: args.location})
        return await ctx.db.get(args.id)
    }
})

export const getBusinessReviews = query({
    args: {id: v.id("businesses")},
    handler: async(ctx, args) => {
        const reviews = await ctx.db
            .query("reviews")
            .filter((q) => q.eq(q.field("business_id"), args.id))
            .collect()
        return reviews
    }
})

export const deleteBusiness = mutation({
    args: { id: v.id("businesses") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
        return true
    }
})