import { Helmet } from 'react-helmet-async';

export default function MyCreations() {
  // List your actual image filenames (all 9)
  const imageFiles = [
    'soap1.jpeg',
    'soap2.jpeg',
    'soap3.jpeg',
    'soap4.jpeg',
    'soap5.jpeg',
    'soap6.jpeg',
    'soap7.jpeg',
    'soap8.jpeg',
    'soap9.jpeg',
  ];

  // Choose the correct base path:
  // If images are directly in /public → use '/'
  // If images are inside /public/Gallery → use '/Gallery/'
  const basePath = '/Spice-Wood-Soaps/Gallery/';

  const images = imageFiles.map((file, index) => ({
    id: index,
    src: `${basePath}${file}`,
    alt: `Behind the scenes of soap making ${index + 1}`,
  }));

  return (
    <>
      <Helmet>
        <title>My Creations | Spice Wood Soaps</title>
        <meta
          name="description"
          content="A glimpse into the artisan process – handcrafted soaps made in Saint Augustine, FL."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=2000&auto=format&fit=crop"
          alt="Handmade soap ingredients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            My Creations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide text-white/60">
            Handcrafted with love in Saint Augustine, Florida
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-secondary-foreground/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/60 text-lg max-w-2xl mx-auto mb-12">
            A glimpse into the artisan process behind Spice Wood Soaps. Each product is carefully crafted by hand using traditional methods and natural ingredients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="aspect-square bg-secondary/30 rounded-xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load: ${img.src}`);
                    e.target.style.display = 'none';
                    // Optionally show a fallback element
                    // e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center">Image not found</div>';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}