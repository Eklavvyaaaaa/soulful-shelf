import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The attention to detail and craftsmanship is extraordinary. Each piece tells a story.",
      author: "Sarah Chen",
      location: "San Francisco"
    },
    {
      id: 2,
      text: "Working with Maria was a beautiful experience. The final piece exceeded all expectations.",
      author: "David Kim",
      location: "Portland"
    },
    {
      id: 3,
      text: "Authentic artistry that connects you to something deeper than just decoration.",
      author: "Elena Vasquez",
      location: "Mexico City"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 shadow-subtle border-0 text-center space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="space-y-1">
                <p className="text-sm font-normal text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;