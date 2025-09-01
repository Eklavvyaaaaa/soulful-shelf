import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactForm = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in commissioning a piece or learning more about the craft?
          </p>
        </div>

        <Card className="p-8 shadow-subtle border-0">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-normal text-foreground">Name</label>
                <Input className="border-border bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-normal text-foreground">Email</label>
                <Input type="email" className="border-border bg-background" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-normal text-foreground">Message</label>
              <Textarea 
                className="min-h-[120px] border-border bg-background resize-none"
                placeholder="Tell us about what you're looking for..."
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-clean"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;