export default function Contact() {
  return (
    <section className="py-32 bg-[#131313]" id="contact">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-12 gap-8 border-t border-[#544437]/30 pt-24">
          {/* Info Column */}
          <div className="col-span-12 md:col-span-4">
            <span className="text-[#ffb77c] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
              Contact
            </span>
            <h2 className="text-6xl font-[Newsreader] font-bold leading-none mb-12">
              Let's Build <br />Permanence.
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#dac2b2] mb-2">New Inquiries</p>
                <a
                  className="text-2xl font-[Newsreader] italic hover:text-[#ffb77c] transition-colors"
                  href="mailto:hello@studio.agency"
                >
                  redthread@studio.agency
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#dac2b2] mb-2">Studio Location</p>
                <p className="text-xl font-[Newsreader]">
                  128 Andheri West, <br />Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-b border-[#544437] focus-within:border-[#ffb77c] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-widest text-[#dac2b2] block mb-2">Your Name</label>
                <input
                  className="bg-transparent border-none w-full p-0 text-white focus:ring-0 focus:outline-none placeholder:text-zinc-700"
                  placeholder="Alexander Arch"
                  type="text"
                />
              </div>
              <div className="border-b border-[#544437] focus-within:border-[#ffb77c] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-widest text-[#dac2b2] block mb-2">Email Address</label>
                <input
                  className="bg-transparent border-none w-full p-0 text-white focus:ring-0 focus:outline-none placeholder:text-zinc-700"
                  placeholder="alex@heritage.co"
                  type="email"
                />
              </div>
              <div className="md:col-span-2 border-b border-[#544437] focus-within:border-[#ffb77c] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-widest text-[#dac2b2] block mb-2">The Project Scope</label>
                <textarea
                  className="bg-transparent border-none w-full p-0 text-white focus:ring-0 focus:outline-none placeholder:text-zinc-700 resize-none"
                  placeholder="Briefly describe the artifact we are building..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-[#ffb77c] text-[#4d2700] font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#d27c27] transition-all"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
