import Image from "next/image";
import { Eyebrow } from "./ui";

const TEAM = [
  {
    name: "Khalid Mohamud",
    area: "Design & Frontend",
    bio: "Turns rough product ideas into interfaces that actually ship — focused on clarity, usability, and clean frontend code.",
  },
  {
    name: "Khalid Sh. Xareed",
    area: "Backend Development",
    bio: "The systems layer no one sees until something breaks. Builds the APIs and infrastructure that let product teams move fast without fearing the backend.",
  },
  {
    name: "Mohamed Abdifatah",
    area: "AI & Automation",
    bio: "Takes the workflows eating your team's time and replaces them with AI systems that actually run in production — not just demos.",
  },
  {
    name: "Abid Yusuf",
    area: "Marketing",
    bio: "Writes the words and shapes the strategy that make technical products land with the people who buy them.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-24 bg-dark-surface-2">
      <div className="max-w-300 mx-auto px-8">
        <div className="flex flex-col gap-3.5 max-w-145 mb-14">
          <Eyebrow>The team</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            The people <span className="text-teal-400">behind the work</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TEAM.map(({ name, area, bio }) => (
            <ProfileCard key={name} name={name} area={area} bio={bio} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({
  name,
  area,
  bio,
}: {
  name: string;
  area: string;
  bio: string;
}) {
  return (
    <div className="group relative flex flex-col bg-linear-to-b from-dark-surface to-[#0A1828] rounded-2xl border border-white/7 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-500/25 hover:shadow-[0_20px_50px_-10px_rgba(14,158,181,0.25)] cursor-pointer">
      {/* Top teal line */}
      <div
        className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-300 ease-out group-hover:w-full z-10"
        style={{ background: "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))" }}
        aria-hidden="true"
      />

      <div className="w-full h-66 overflow-hidden">
        <Image
          src="/khalid.jpg"
          alt={name}
          width={400}
          height={533}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-col gap-1.5 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-400">
          {area}
        </p>
        <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white transition-colors duration-300 ease-out group-hover:text-teal-400">
          {name}
        </h3>
        <p className="text-[12.5px] leading-relaxed text-gray-500">{bio}</p>
      </div>
    </div>
  );
}
