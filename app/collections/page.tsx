import Container from "@/components/layout/Container";
import ProductCard from "@/components/product/ProductCard";

const items=[
{name:"Royal Collection",price:"₹9,999"},
{name:"AASHA Signature",price:"₹12,999"},
{name:"Festive Collection",price:"₹7,999"}
];

export default function Collections(){
 return <main><Container><h1 className="text-5xl font-bold py-16">Collections</h1><div className="grid md:grid-cols-3 gap-6">{items.map(i=><ProductCard key={i.name}{...i}/>)}</div></Container></main>;
}
