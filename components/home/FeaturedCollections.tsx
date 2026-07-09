import Container from "@/components/Container";
import FadeIn from "@/components/ui/FadeIn";

const collections = [
  {
    title: "Signature Collection",
    description: "Timeless designs created for elegant moments.",
  },
  {
    title: "Luxury Edit",
    description: "A curated expression of refined beauty.",
  },
  {
    title: "New Arrivals",
    description: "Fresh creations with a modern luxury touch.",
  },
];

export default function FeaturedCollections(){
  return (
    <section className="bg-black py-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[#d4af37] uppercase tracking-[0.4em] text-sm">
              Collections
            </p>
            <h2 className="mt-5 text-4xl md:text-6xl text-white">
              Featured Collections
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {collections.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-10 text-center transition hover:border-[#d4af37]"
              >
                <h3 className="text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
