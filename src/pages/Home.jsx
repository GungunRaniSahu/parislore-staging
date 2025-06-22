import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ParisLore – Hidden Stories of the City</title>
        <meta
          name="description"
          content="Discover the untold stories, street art, and local poems that bring the soul of Paris to life."
        />
        <meta name="keywords" content="Paris, lore, street art, poems, history, ParisLore" />
        <meta name="author" content="ParisLore Team" />
        <meta property="og:title" content="ParisLore – Hidden Stories of the City" />
        <meta
          property="og:description"
          content="Share and explore hidden gems and tales of Paris through local voices."
        />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://parislore-staging.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-[#006BA6] mb-6">
          Share the Soul of Paris
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-lora mb-8">
          ParisLore is a tribute to the unseen—stories whispered in alleys, art scrawled on forgotten walls,
          and poems that echo through cobbled streets.
        </p>

      </section>
    </>
  );
};

export default Home;
