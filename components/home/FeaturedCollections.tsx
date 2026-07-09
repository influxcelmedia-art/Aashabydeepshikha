const collections=["Signature Collection","Luxury Edit","New Arrivals"];

export default function FeaturedCollections(){
 return <section className="py-16"><h2 className="text-3xl font-semibold text-center mb-8">Featured Collections</h2><div className="grid md:grid-cols-3 gap-6">{collections.map((item)=><div key={item} className="border border-white/10 rounded-xl p-8 text-center">{item}</div>)}</div></section>;
}
