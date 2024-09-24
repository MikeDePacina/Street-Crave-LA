import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import{ Badge } from "@/components/ui/badge";

export default function HomePage(){

    return(
        <Card>
            <CardHeader>
            <CardTitle>Tauro Taco's</CardTitle>
            
            </CardHeader>
            <CardFooter>
                <Badge>Tag 1</Badge>
                <Badge>Tag 2</Badge>
                <Badge>Tag 3</Badge>
            </CardFooter>
        </Card>
    )
}