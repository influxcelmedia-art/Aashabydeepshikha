type ProductCardProps={name:string;price:string};

export default function ProductCard({name,price}:ProductCardProps){
 return <div className="rounded-xl border border-white/10 p-6"><div className="h-48 rounded-lg bg-white/5 flex items-center justify-center">Image</div><h3 className="mt-4 text-lg">{name}</h3><p className="gold-text mt-2">{price}</p></div>;
}
