import { useState } from "react";

const SubmitForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", title: "", body: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.title || !formData.body) {
      setError("All fields are required.");
      return;
    }

    const result = { success: true };
    if (result.success) {
      setSubmitted(true);
      setError("");
      setFormData({ name: "", email: "", title: "", body: "" });
    }
  };

  return (
    <section id="submit" className="py-12 px-6 md:px-12">
      {!open ? (
        <div className="flex justify-center">
          <button
            className="bg-[#006BA6] text-white px-8 py-3 rounded-md hover:bg-[#00527f] font-playfair text-lg shadow"
            onClick={() => {
              setOpen(true);
              setSubmitted(false);
            }}
          >
            Submit your Parisian Story
          </button>
        </div>
      ) : (
        <div className="relative max-w-lg mx-auto">
          <button
            className="absolute right-0 -top-10 text-gray-500 hover:text-[#E63946] font-bold text-2xl"
            onClick={() => {
              setOpen(false);
              setSubmitted(false);
            }}
            aria-label="Close form"
            type="button"
          >
            ×
          </button>
          <h2 className="text-2xl font-playfair text-[#006BA6] mb-6 text-center">
            Share Your Parisian Story
          </h2>
          {submitted && (
            <p className="text-green-600 font-lora text-center mb-4">
              Thank you for sharing your story!
            </p>
          )}
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-4">
            <div>
              <label className="block text-sm mb-1 font-lora">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 font-lora"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-lora">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 font-lora"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-lora">Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 font-lora"
                placeholder="Story Title"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-lora">Your Story</label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 font-lora"
                rows={5}
                placeholder="Share your Parisian tale..."
              ></textarea>
            </div>
            {error && <p className="text-red-600 text-sm font-lora">{error}</p>}
            <button
              type="submit"
              className="bg-[#E63946] text-white px-6 py-2 rounded-md hover:bg-[#c5303b] font-playfair"
            >
              Submit Story
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default SubmitForm;
