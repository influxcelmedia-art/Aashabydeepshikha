import Container from "@/components/layout/Container";

export default function ProductDetails({params}:{params:{id:string}}){
 return <main><Container><div className="py-20"><h1 className="text-4xl font-bold">Product {params.id}</h1><p className="mt-4 text-white/70">Luxury product details will appear here.</p></div></Container></main>;
}
