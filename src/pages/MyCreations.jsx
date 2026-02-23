import { Helmet } from 'react-helmet-async';

export default function MyCreations() {
  // Placeholder images – replace with real photos
  const images = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    src: `/gallery/creation-${i+1}.jpg`,
    alt: `Behind the scenes of soap making ${i+1}`,
  }));

  return (
    <>
      <Helmet>
        <title>My Creations | Spice Wood Soaps</title>
        <meta name="description" content="A glimpse into the artisan process – handcrafted soaps made in Saint Augustine, FL." />
      </Helmet>
      <div className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-4">My Creations</h1>
            <p className="text-xl text-primary font-light">Handcrafted with love in Saint Augustine, Florida</p>
          </div>

          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            A glimpse into the artisan process behind Spice Wood Soaps. Each product is carefully crafted by hand using traditional methods and natural ingredients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map(img => (
              <div key={img.id} className="aspect-square bg-secondary/30 rounded-xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}