import Container from "@/components/layout/Container";

export default async function ProductDetail({params}:{params:{slug:string}}){
 return (
  <main>
   <Container>
    <section className="py-20">
     <h1 className="text-5xl font-bold">{params.slug}</h1>
     <p className="mt-6 text-white/70">AASHA premium product details.</p>
    </section>
   </Container>
  </main>
 );
}
