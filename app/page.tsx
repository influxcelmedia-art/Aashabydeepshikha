import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LuxuryHero from "@/components/home/LuxuryHero";
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
    <LuxuryHero />
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
