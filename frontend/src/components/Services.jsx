const services = [
  {
    number: "01",
    title: "Spatial Curation",
    description: "Designing physical environments that breathe life into brand history and cultural legacy.",
    items: ["Exhibit Design", "Interior Architecture"],
    bg: "bg-[#131313]",
  },
  {
    number: "02",
    title: "Brand Preservation",
    description: "Elevating identities through archival-quality brand systems and visual storytelling.",
    items: ["Heritage Strategy", "Visual Systems"],
    bg: "bg-[#1c1b1b]",
  },
  {
    number: "03",
    title: "Digital Archives",
    description: "Translating timeless heritage into high-performance, immersive digital experiences.",
    items: ["Web Architecture", "Immersive Media"],
    bg: "bg-[#131313]",
  },
];

export default function Services() {
  return (
    <section className="bg-[#131313] relative" id="services">
      <div className="flex flex-col md:flex-row">
        {services.map((service) => (
          <div
            key={service.number}
            className={`flex-1 min-h-[600px] ${service.bg} border-r border-[#544437]/10 last:border-r-0 flex flex-col justify-between p-12 group`}
          >
            <div>
              <span className="text-[60px] font-[Newsreader] font-bold text-[#544437] opacity-20 block group-hover:text-[#ffb77c] group-hover:opacity-100 transition-all">
                {service.number}
              </span>
              <h3 className="text-4xl font-[Newsreader] font-bold mt-4">{service.title}</h3>
            </div>
            <div className="mt-24">
              <p className="text-[#dac2b2] mb-8 max-w-sm">{service.description}</p>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold">
                    <span className="w-8 h-[1px] bg-[#ffb77c]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
