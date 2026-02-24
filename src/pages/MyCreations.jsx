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
                  onError={(e) => {
                    console.error(`Failed to load: ${img.src}`);
                    // Optionally show a placeholder or hide the broken image
                    e.target.style.display = 'none';
                    // You could also show a fallback element
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