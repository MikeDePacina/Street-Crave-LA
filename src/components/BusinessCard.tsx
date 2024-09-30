import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import{ Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export interface BusinessCardProps {
    _id: number;
    name: string;
    description: string;
    tags: string[];
    imageUrl: string;
    rating: number;
    type: string[];
}



export function BusinessCard( businessCard : BusinessCardProps) {
    return(
        <Link href="/page/[id]" as={`/page/${businessCard._id}`}>
        <Card className="inline-block font-sans m-4">
            <CardHeader>
            <CardTitle className="text-xl">{businessCard.name}</CardTitle>
            {
                businessCard.type && businessCard.type.map((type) => (
                    <Badge key={type} className="inline">{type}</Badge>
                ))
            }
            <div className="flex flex-row gap-3">
            {businessCard.tags && businessCard.tags.map((tag) => (
                <Badge key={tag} className="inline">{tag}</Badge>
            ))}

            </div>
            <p>Rating: {businessCard.rating}</p>
            <Image
            src={businessCard.imageUrl}
            width={250}
            height={150}
            alt={businessCard.name}
            />
            </CardHeader>
            <CardContent>
                <p>{businessCard.description}</p>
            </CardContent>
        </Card>
        </Link>
    )
}