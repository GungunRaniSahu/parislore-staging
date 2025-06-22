export default function CareDuelAndAwards() {
  return (
    <>
      <header className="text-center py-10 bg-[#F0F8FB] text-[#006BA6]">
        <h1 className="text-4xl font-bold font-playfair">Welcome to ParisLore</h1>
        <p className="mt-2 text-lg font-lora">
          Discover tales, legends & street art from the heart of Paris
        </p>
      </header>

      <section className="text-center py-4 bg-[#E63946] text-white">
        <a
          href="https://careduel.com/topic-of-the-week"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-lora hover:underline"
        >
           Topic of the Week
        </a>
      </section>

      <section className="flex flex-wrap justify-center gap-6 py-10 bg-white">
        <div className="p-6 border border-gray-200 rounded-md shadow hover:shadow-md transition text-center">
          <a
            href="https://top216.com/vote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#006BA6] font-lora font-medium hover:underline"
          >
            Vote Now
          </a>
        </div>

        <div className="p-6 border border-gray-200 rounded-md shadow hover:shadow-md transition text-center">
          <a
            href="https://thetop36.com/highlights"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E63946] font-lora font-medium hover:underline"
          >
             See Finalists
          </a>
        </div>
      </section>
    </>
  );
}
