import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function Home(){
 return (
  <>
   <Navbar />
   <main>
    <Section className="min-h-[70vh] flex items-center">
     <Container>
      <h1 className="text-6xl font-bold">AASHA <span className="gold-text">by Deep Shikha</span></h1>
      <p className="mt-6 max-w-xl text-white/70">A luxury experience crafted with elegance, tradition and modern design.</p>
     </Container>
    </Section>
   </main>
   <Footer />
  </>
 );
}
