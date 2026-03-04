"use client";

import TeamCard from "./team-card";

// Derive role from filename: e.g. "Director_Marketing.png" -> "Director Marketing"
function roleFromFilename(filename: string): string {
  return filename.replace(/\.(png|jpg|jpeg|webp)$/i, "").replace(/_/g, " ");
}

const teamImages = [
  "President.png",
  "Vice_President.png",
  "General_Secretary.png",
  "EA.png",
  "Director_Marketing.png",
  "Director_Promotions.png",
  "Director_GR.png",
  "Director_Computing.png",
  "Director_Technology.png",
  "Director_Finance.png",
  "Director_CA.png",
  "Director_MEDIA.png",
  "Director_Branding.png",
];

const placeholderNames = [
  "NEHA AAMIR",
  "MUHAMMAD HASNAIN",
  "SHOAIB RAZA",
  "SAUD MALIK",
  "AHMED MIRZA",
  "ASHNA JAMAL",
  "MISBAH IBRAHIM",
  "ASHAR USMANI",
  "ASFANDYAR KHANZADA",
  "MUHAMMAD HUZAIFA",
  "ABDULHADI YASEEN",
  "ABDUL HADI",
  "TAQWA RASHEED",
];

const teamMembers = teamImages.map((filename, index) => ({
  name: placeholderNames[index] ?? "Team Member",
  role: roleFromFilename(filename),
  image: `/team/${filename}`,
  linkedInUrl: "#",
  gradientVariant: (index % 2 === 0 ? "red" : "cyan") as "red" | "cyan",
  isMiddle: filename === "President.png",
}));

export default function OurTeam() {
  return (
    <section className="bg-dark-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex gap-4 mb-12 md:mb-16">
          <div className="w-1 bg-red-primary flex-shrink-0" />
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">OUR_TEAM</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              MEET THE LEADERSHIP BEHIND DEVDAY.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.role} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
