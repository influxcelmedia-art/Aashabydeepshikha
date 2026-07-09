import ProductCard from "@/components/product/ProductCard";

const products=[
 {name:"Royal Elegance",price:"₹4,999"},
 {name:"Golden Aura",price:"₹6,999"},
 {name:"Signature AASHA",price:"₹8,999"}
];

export default function FeaturedProducts(){
 return <section className="py-16"><h2 className="text-3xl text-center mb-8">Featured Products</h2><div className="grid md:grid-cols-3 gap-6">{products.map((p)=><ProductCard key={p.name}{...p}/>)}</div></section>;
}
