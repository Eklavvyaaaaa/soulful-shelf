import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const sampleProducts = [
    {
      id: 1,
      title: "Handwoven Textile",
      description: "Crafted with traditional techniques passed down through generations.",
      price: "$180",
      image: "/lovable-uploads/placeholder-product1.jpg"
    },
    {
      id: 2,
      title: "Ceramic Bowl", 
      description: "Simple form meets functional beauty in this wheel-thrown piece.",
      price: "$45",
      image: "/lovable-uploads/placeholder-product2.jpg"
    },
    {
      id: 3,
      title: "Wooden Sculpture",
      description: "Each curve carved by hand, revealing the natural grain within.",
      price: "$95",
      image: "/lovable-uploads/placeholder-product3.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of handcrafted pieces, each telling its own story.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-subtle hover:shadow-clean transition-all duration-300 border-0">
              {/* Product Image */}
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent-soft"></div>
              </div>

              {/* Product Info */}
              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{product.price}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-4">
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary-soft">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-clean">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;