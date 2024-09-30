import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    users: defineTable({
        type: v.string(),
    }),
    
    reviews: defineTable({
        user_id: v.union(v.id("users"), v.null()),
        business_id: v.union(v.id("businesses"), v.null()),
        content: v.string(),
    }),

    businesses: defineTable({
        name: v.string(),
        description: v.string(),
        location: v.optional(v.string()),
        rating: v.number(),
        links: v.optional(v.array(v.string())),
        type: v.array(v.string()),
        tags: v.optional(v.array(v.string())),
        numOfReviews: v.number(),
    }).index("by_rating_and_reviews", ["rating", "numOfReviews"]),
})