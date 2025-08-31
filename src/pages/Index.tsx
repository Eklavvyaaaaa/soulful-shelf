import Hero from "@/components/Hero";
import ArtisanProfile from "@/components/ArtisanProfile";
import ProductShowcase from "@/components/ProductShowcase";
import SocialPreview from "@/components/SocialPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ArtisanProfile />
      <ProductShowcase />
      <SocialPreview />
    </div>
  );
};

export default Index;
