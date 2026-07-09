import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import InstagramGallery from "@/components/home/InstagramGallery";
import CTA from "@/components/home/CTA";

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
    <FeaturedCollections />
    <FeaturedProducts />
    <BrandStory />
    <Testimonials />
    <InstagramGallery />
    <Newsletter />
    <CTA />
   </main>
   <Footer />
  </>
 );
}
