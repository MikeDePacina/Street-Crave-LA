"use client"

import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { Authenticated } from "convex/react"

export default function BusinessPage({params}){
    const business = useQuery(api.businesses.getBusiness, {id: params.id})

    return(
        <div>
            <h1>Business Page</h1>
            <p>Business Name: {business?.name}</p>
            <p>Business ID: {business?._id}</p>
            <p>Rating: {business?.rating}</p>
            <Authenticated>
                <p>Rate {business?.name}</p>
                <p>Leave a review</p>
            </Authenticated>
        </div>
    )
}