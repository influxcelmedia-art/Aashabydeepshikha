export default function InstagramGallery(){
 return <section className="py-16"><h2 className="text-3xl text-center">Instagram Gallery</h2><div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">{[1,2,3,4].map(i=><div key={i} className="h-40 bg-white/5 rounded-lg" />)}</div></section>;
}
