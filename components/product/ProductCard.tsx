type ProductCardProps={name:string;price:string};

export default function ProductCard({name,price}:ProductCardProps){
 return <div className="group rounded-xl border border-white/10 p-6 transition duration-300 hover:border-yellow-600/60 hover:-translate-y-2"><div className="h-48 rounded-lg bg-white/5 flex items-center justify-center transition group-hover:bg-white/10">Image</div><h3 className="mt-4 text-lg">{name}</h3><p className="gold-text mt-2">{price}</p></div>;
}
