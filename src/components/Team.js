import aerick from "../assets/team/aerickold.png";
import rock from "../assets/team/rockold.png";
import cj from "../assets/team/cjold.png";
import heids from "../assets/team/heidsold.png";
import jb from "../assets/team/jbold.png";
import karan from "../assets/team/karanold.png";
import meralds from "../assets/team/meraldsold.png";
import kat from "../assets/team/katold.png";
import aerickyoung from "../assets/team/Aerick-young.png";
import rockyoung from "../assets/team/Rock-young.png";
import cjyoung from "../assets/team/CJ-young.png";
import heidsyoung from "../assets/team/Heids-young.png";
import jbyoung from "../assets/team/JB-young.png";
import karanyoung from "../assets/team/Karan-young.png";
import meraldsyoung from "../assets/team/Meralds-young.png";
import katyoung from "../assets/team/Kat-young.png";
import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const teamMembers = [
    {
      name: "Karan Singh Dhir",
      imageSrc: karan,
      youngerImageSrc: karanyoung,
      jobTitle: "Full Stack Developer",
      linkedinLink: "https://www.linkedin.com/in/ksdhir/",
      linkedinPath: "/ksdhir",
      animate: {
        fadeInOut: "animate-fade-in-out",
        fadeOutIn: "animate-fade-out-in",
      },
    },
    {
      name: "Haidren Amalia",
      imageSrc: heids,
      youngerImageSrc: heidsyoung,
      jobTitle: "Full Stack Developer",
      linkedinLink: "https://www.linkedin.com/in/haidrenamalia/",
      linkedinPath: "/haidrenamalia",
    },
    {
      name: "Meraldo Cazar",
      imageSrc: meralds,
      youngerImageSrc: meraldsyoung,
      jobTitle: "Full Stack Developer",
      linkedinLink: "https://www.linkedin.com/in/mscjr/",
      linkedinPath: "/mscjr",
    },
    {
      name: "JB Sinluenam",
      imageSrc: jb,
      youngerImageSrc: jbyoung,
      jobTitle: "Front-End Developer",
      linkedinLink: "https://www.linkedin.com/in/jbsinluenam/",
      linkedinPath: "/jbsinluenam",
    },
    {
      name: "Aerick Estrella",
      imageSrc: aerick,
      youngerImageSrc: aerickyoung,
      jobTitle: "UX Lead",
      linkedinLink: "https://www.linkedin.com/in/aerick-estrella/",
      linkedinPath: "/aerick-estrella",
    },
    {
      name: "Christian Flordeliza",
      imageSrc: cj,
      youngerImageSrc: cjyoung,
      jobTitle: "UI Lead",
      linkedinLink: "https://www.linkedin.com/in/christian-flordeliza/",
      linkedinPath: "/christian-flordeliza",
    },
    {
      name: "Rock Manuel",
      imageSrc: rock,
      youngerImageSrc: rockyoung,
      jobTitle: "PM/Designer",
      linkedinLink: "https://www.linkedin.com/in/rock-manuel/",
      linkedinPath: "/rock-manuel",
    },
    {
      name: "Katrina Mirambel",
      imageSrc: kat,
      youngerImageSrc: katyoung,
      jobTitle: "UX/UI Designer",
      linkedinLink: "https://www.linkedin.com/in/katrinamirambel/",
      linkedinPath: "/katrinamirambel",
    },
  ];

  return (
    <section className="bg-primaryLightest">
      <div
        className="flex flex-col px-6 py-32 sm:px-16 lg:px-28 justify-center items-center font-sans mx-auto max-w-8xl"
        id="team"
      >
        <h2 className="flex w-full py-6 pb-20 items-center justify-center text-[48px] lg:text-7xl font-SatoshiBold text-primaryDark">
          Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-20">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageSrc={member.imageSrc}
              youngerImageSrc={member.youngerImageSrc}
              jobTitle={member.jobTitle}
              linkedinLink={member.linkedinLink}
              linkedinPath={member.linkedinPath}
              animate={member.animate}
              ctr={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
