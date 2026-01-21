import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

import braneUws1 from "@/assets/products/brane-uws.jpg";
import braneUws2 from "@/assets/products/brane-uws-2.jpg";
import rakakaModelN from "@/assets/products/rakaka-model-n.jpg";
import frshlyDispenser from "@/assets/products/frshly-dispenser.png";

const products = [
  {
    id: "brane-uws",
    title: "Autonomous Underwater Systems",
    company: "Brane Group",
    description: "Designed and architected autonomous underwater vehicles (AUVs) and unmanned surface vessels (USVs) for maritime operations, integrating AI perception, embedded control systems, and robust mechanical design.",
    images: [braneUws2, braneUws1],
    tags: ["Robotics", "AI", "Embedded Systems", "Maritime"],
  },
  {
    id: "rakaka",
    title: "Autonomous Cooking System",
    company: "Rakaka Food Technology",
    description: "Built an autonomous cooking product from scratch — spanning mechanical design, embedded systems, software orchestration, and user experience. A modular, scalable architecture enabling rapid experimentation.",
    images: [rakakaModelN],
    tags: ["Food-Tech", "Automation", "Full-Stack Product"],
  },
  {
    id: "frshly",
    title: "Smart Food Dispensing System",
    company: "Frshly",
    description: "Led product innovation for smart food dispensing systems with computer-vision-driven interaction flows tightly coupled with embedded hardware behavior.",
    images: [frshlyDispenser],
    tags: ["Computer Vision", "IoT", "Product Design"],
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
            />
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
        
        {/* Image selector dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === selectedImage 
                    ? "bg-primary w-6" 
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {product.title}
            </h3>
            <p className="text-primary font-medium text-sm">{product.company}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Products() {
  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products I've Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment — physical products that solve real-world problems
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
