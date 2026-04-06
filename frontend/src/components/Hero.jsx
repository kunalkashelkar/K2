export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-[#544437]/10"
      id="home"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          alt="stark brutalist concrete structure with sharp shadows and architectural grid patterns"
          className="w-full h-full object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEUsDvOUuA-GL_bMLgFRuRNMOypp4P686s0gTIXsjuylGKIHrExdC8CdDJfHL_oO_kepZ1yPSC5pm4HAIhNalSNlP0rkMB1U2IDxq0CVoYd-7JR6gNsekY3AF9QPCm3wpsq3tJfPqH8h7lXzO0lHVN9RrJavlgeyhkZGnkDwZ7Sjq4Yg5n8E5cSdvjj2KzV7188J5344HQ-I13SwuRHpbNejPav1dcRiGQihEsFMVAZGmmGcS-2Yrv2Og4q9UkhylgBspE-HKSFlU"
        />
      </div>

      <div className="container mx-auto px-12 relative z-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.85] font-[Newsreader] font-extrabold tracking-tighter uppercase mb-8">
            The Brutalist <br />
            <span className="italic text-[#ffb77c] font-light">Archive.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 mt-16 items-start">
            <div className="max-w-xs">
              <p className="text-sm uppercase tracking-[0.3em] text-[#dac2b2] mb-4">Curated Legacy</p>
              <p className="text-[#e5e2e1] font-[Manrope] text-lg leading-relaxed">
                Defining the next generation of heritage through architectural precision and digital permanence.
              </p>
            </div>
            <div className="w-full md:w-64 aspect-[3/4] bg-[#2a2a2a] relative">
              <img
                alt="minimalist sculpture on a dark stone pedestal with dramatic warm lighting from the side"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-WgIKVuWEm3TU-MQrEXBWrSaAgSQwi1xWRUN0talPzHkhdx4FiMVy19VGi6g6JY0GUBjx8af6w2GaO7FZl0rBEoCQwsqHlX-jfr7c1Sk2O8p_dACwP3f4P8Zaq93MqhBwKHveZEnycxmeWgJZ6p9-oRUnWk-8TOOHR23j0BJjwA-EHOv_9ltUpKR0IE--aDZh3PCV5-ihjpHzASO-W1zQFFi4QnzC27fqYtDl42E8WGo87arBvYvC5iHoXCBz-EAdIy6TJdKvfY"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.5em] uppercase vertical-rl rotate-180 text-[#dac2b2]">
            Scroll to explore
          </span>
          <div className="editorial-line h-24"></div>
        </div>
      </div>
    </section>
  );
}
