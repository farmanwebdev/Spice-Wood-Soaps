import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function OurStory() {
  return (
    <>
      <Helmet>
        <title>Our Story | Spice Wood Soaps</title>
        <meta name="description" content="Learn about our veteran-owned, small-batch soap company in Saint Augustine, FL. Natural ingredients, handcrafted with love." />
      </Helmet>
      <div className="bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl text-primary font-light">Rooted in nature, crafted by hand, designed for the soul.</p>
          </div>

          <div className="prose prose-lg mx-auto text-foreground">
            <p>
              I honestly? This whole thing started because I got tired of not knowing what was in the stuff I was putting on my skin. I’d flip over a bottle of body wash and see a paragraph of ingredients I couldn’t pronounce. That didn’t sit right with me.
            </p>
            <p>
              I’m a veteran, and after I got out of the service, I landed in Saint Augustine, Florida. If you’ve never been, it’s this beautiful old town, oldest city in the country, actually. Something about being here slowed me down in a good way. I started paying more attention to what I was using, what I was putting on my skin.
            </p>
            <p>
              Goat’s milk soap felt right – it’s gentle, it’s moisturizing, and it just works. I started experimenting in 2023, and pretty soon friends and family were asking for bars. Then their friends started asking. And here we are.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">What Makes Us Different</h2>
            <p>
              Every single bar of soap we make is a goat’s milk soap. That’s not a marketing thing; it’s just what we do. Goat’s milk is packed with vitamins and fatty acids that are genuinely good for your skin. It’s not a gimmick.
            </p>
            <p>
              We also don’t use mica powders to color our soaps. I know a lot of soapmakers use them, and that’s their call, but we stick to natural colorants only. Clays, botanicals, spices, things that come from the earth. If it doesn’t grow or come out of the ground, it’s not going in our soap.
            </p>
            <p>
              Same goes for everything else we make. Our sugar scrubs don’t have glycerin in them. Our balms and butters are made with real ingredients – mango butter, hemp oil, beeswax – things you can actually picture. No harsh chemicals. No mystery ingredients. Just good, honest stuff that works.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">How We Make It</h2>
            <p>
              We do everything the old fashioned way – cold process. Every batch gets mixed by hand, poured into wooden molds, hand cut, and then left to cure for at least six weeks. Yeah, six weeks. It takes patience, but that’s what makes the bars last longer and lather better. No shortcuts.
            </p>
            <p>
              Everything is small batch because that’s the only way to make sure the quality stays where it needs to be. This isn’t a factory operation. It’s me, in my workshop, making sure every bar is something I’d be proud to hand to someone.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Veteran Owned, Florida Made</h2>
            <p>
              Being veteran owned means something to me. The discipline, the attention to detail, the refusal to cut corners – that all carried over. I take pride in what I make, and I stand behind every product. If you’re not happy, I want to know about it.
            </p>
            <p>
              We’re a small operation out of Saint Augustine, and that’s by design. We’d rather make less and make it right than scale up and lose what makes this special. Thanks for checking us out – I hope you give us a try.
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-serif mb-4">Ready to try something different?</p>
            <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}