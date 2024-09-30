"use client"

import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"
import { BusinessCard, BusinessCardProps} from "@/components/BusinessCard";


export default function HomePage(){
  const businessCards : BusinessCardProps[] = useQuery(api.businesses.getBusinesses)
  return(
    <div >
      {businessCards && businessCards.map((businessCard) => 
        <BusinessCard key={businessCard._id} {...businessCard} />  
      )}
      </div>
      
  )
}