const reviews=["Beautiful craftsmanship","Elegant luxury experience","AASHA feels timeless"];

export default function Testimonials(){
 return <section className="py-16"><h2 className="text-3xl text-center mb-8">Testimonials</h2><div className="grid md:grid-cols-3 gap-6">{reviews.map(r=><div key={r} className="border border-white/10 rounded-xl p-6">{r}</div>)}</div></section>;
}
