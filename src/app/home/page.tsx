import { BusinessCard, BusinessCardProps} from "@/components/BusinessCard";


const businessCards: BusinessCardProps[] = [
  {
    businessId: 1,
    businessName: "Bright Brew Coffee",
    description: "Artisanal coffee roasters with a cozy cafe atmosphere.",
    tags: ["coffee", "cafe", "breakfast"],
    imageUrl: "/images/businesses/brightbrew.jpg",
    rating: 4.7
  },
  {
    businessId: 2,
    businessName: "TechNova Solutions",
    description: "Innovative software development and IT consulting services.",
    tags: ["technology", "software", "consulting"],
    imageUrl: "/images/businesses/technova.jpg",
    rating: 4.5
  },
  {
    businessId: 3,
    businessName: "Green Thumb Nursery",
    description: "Wide variety of plants, gardening supplies, and expert advice.",
    tags: ["gardening", "plants", "outdoor"],
    imageUrl: "/images/businesses/greenthumb.jpg",
    rating: 4.8
  },
  {
    businessId: 4,
    businessName: "Fitness Fusion Gym",
    description: "State-of-the-art gym equipment and diverse fitness classes.",
    tags: ["fitness", "gym", "health"],
    imageUrl: "/images/businesses/fitnessfusion.jpg",
    rating: 4.6
  },
  {
    businessId: 5,
    businessName: "Gourmet Bites Restaurant",
    description: "Fine dining experience with a fusion of global cuisines.",
    tags: ["restaurant", "fine dining", "gourmet"],
    imageUrl: "/images/businesses/gourmetbites.jpg",
    rating: 4.9
  },
  {
    businessId: 6,
    businessName: "Paws & Claws Pet Store",
    description: "Everything you need for your furry, feathered, or scaly friends.",
    tags: ["pets", "pet supplies", "animals"],
    imageUrl: "/images/businesses/pawsandclaws.jpg",
    rating: 4.4
  },
  {
    businessId: 7,
    businessName: "Vintage Finds Antique Shop",
    description: "Curated collection of unique antiques and vintage items.",
    tags: ["antiques", "vintage", "collectibles"],
    imageUrl: "/images/businesses/vintagefinds.jpg",
    rating: 4.3
  }
];

export default function HomePage(){
  
  return(
    <div >
      {businessCards.map((businessCard) => 
        <BusinessCard key={businessCard.businessId} {...businessCard} />  
      )}
      </div>
      
  )
}