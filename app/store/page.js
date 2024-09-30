import ProductList from "@/Components/ProductList";
import { Suspense } from "react";

export default function Store() {
  return (
    <main className="flex flex-col gap-4">
      <div className="">
        <p className="text-left  p-2">
          Step into the realm of metal-inspired garden art with 'No Place Like
          Gnome.' Our showcase is a testament to the fusion of horticulture and
          heavy metal, where each gnome is a unique masterpiece handcrafted by
          our skilled artisans. Explore the gallery below to witness the
          extraordinary craftsmanship and attention to detail that defines our
          bespoke gnomes. From iconic rock legends to whimsical characters,
          these garden companions are designed to add a touch of rebellion and
          individuality to your outdoor space. Embrace the extraordinary as you
          scroll through our collection – because there truly is 'No Place Like
          Gnome!'
        </p>
      </div>
      <Suspense>
        <ProductList />
      </Suspense>
    </main>
  );
}
