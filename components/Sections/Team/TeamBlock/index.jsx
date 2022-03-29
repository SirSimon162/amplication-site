import TeamMember from "../../../Common/TeamMember";
import FeatureItem from '../../../Sections/Team/FeaturesItem';
import matanShidlov from '../../../../public/images/team/matan-shidlov.png';
import innaBell from '../../../../public/images/team/inna-bell.png';
import yuvalHanaz from '../../../../public/images/team/yuval-hazaz.png';
import vikaGoncharuk from '../../../../public/images/team/vika-goncharuk.png';
import morHagbi from '../../../../public/images/team/mor-hagbi.png';
import mosheForman from '../../../../public/images/team/moshe-forman.png';
import sauravJain from '../../../../public/images/team/saurav-jain.png';
import alexBass from '../../../../public/images/team/alex-bass.png';
import amitBarletz from '../../../../public/images/team/amit-barletz.png';
import ofekGabay from '../../../../public/images/team/ofek-gabay.png';
import talkWithUs from '../../../../public/images/icons/talk-with-with-team.svg';
import joinUs from '../../../../public/images/icons/join-the-team.svg';

const TeamBlock = () => {
  const members = [
    {
      name: 'Matan Shidlov',
      position: 'VP of Engineering',
      image: matanShidlov,
      links: [
        {
          href: 'https://www.linkedin.com/in/matanshidlov/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/mshidlov',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/MShidlov',
          iconClass: 'twitter',
        }
      ]
    },
    {
      name: 'Inna Bell',
      position: 'Head of Marketing',
      image: innaBell,
      links: [
        {
          href: 'https://www.linkedin.com/in/bellinna/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://twitter.com/InnaBell_',
          iconClass: 'twitter',
        }
      ]
    },
    {
      name: 'Yuval Hazaz',
      position: 'Founder & CEO',
      image: yuvalHanaz,
      links: [
        {
          href: 'https://www.linkedin.com/in/yuvalhazaz/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/yuval-hazaz',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/Yuvalhazaz1',
          iconClass: 'twitter',
        }
      ]
    },
    {
      name: 'Vika Goncharuk',
      position: 'Office Manager',
      image: vikaGoncharuk,
      links: [
        {
          href: 'https://www.linkedin.com/in/victoria-goncharuk-35504885/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/VikaGon',
          iconClass: 'github',
        },
      ]
    },
    {
      name: 'Mor Hagbi',
      position: 'Sr. Full-stack Eng.',
      image: morHagbi,
      links: [
        {
          href: 'https://www.linkedin.com/in/mor-hagbi-57304811b/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/morhag90',
          iconClass: 'github',
        },
      ]
    },
    {
      name: 'Moshe Forman',
      position: 'Sr. Technical Writer',
      image: mosheForman,
      links: [
        {
          href: 'https://www.linkedin.com/in/mosheforman/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/MoFoGo',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/MosheForman',
          iconClass: 'twitter',
        },
      ]
    },
    {
      name: 'Saurav Jain',
      position: 'Community Manager',
      image: sauravJain,
      links: [
        {
          href: 'https://www.linkedin.com/in/saurav-jain-384625147/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/souravjain540',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/Sauain',
          iconClass: 'twitter',
        },
      ]
    },
    {
      name: 'Alex Bass',
      position: 'Sr. Product Designer',
      image: alexBass,
      links: [
        {
          href: 'https://www.linkedin.com/in/bassalex/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/alexbass86',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/kipibass86',
          iconClass: 'twitter',
        },
      ]
    },
    {
      name: 'Amit Barletz',
      position: 'Full-Stack Eng.',
      image: amitBarletz,
      links: [
        {
          href: 'https://www.linkedin.com/in/amitbarletz/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/abrl91',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/BarletzA52',
          iconClass: 'twitter',
        },
      ]
    },
    {
      name: 'Ofek Gabay',
      position: 'Full-Stack Eng.',
      image: ofekGabay,
      links: [
        {
          href: 'https://www.linkedin.com/in/ofek-gabay/',
          iconClass: 'linkedin',
        },
        {
          href: 'https://github.com/tupe12334',
          iconClass: 'github',
        },
        {
          href: 'https://twitter.com/OfekGabay1',
          iconClass: 'twitter',
        },
      ]
    },
  ];

  const features = [
    {
      image: talkWithUs,
      alt: 'Talk with us',
      title: '<span>Talk</span>\n' +
        '                  with the team',
      content: 'Join Amplication\'s Discord channel and chat with the team. Ask\n' +
        '                  about anything, we would love to help',
      linkUrl: 'https://amplication.com/discord',
      linkText: 'Chat now',
    },
    {
      image: joinUs,
      alt: 'Join us',
      title: '<span>Join</span>\n' +
        '                  the team',
      content: 'We are a small, dedicated team, revolutionizing the speed and\n' +
        '                  ease of cloud development for professional developers',
      linkUrl: 'https://amplication.com/jobs',
      linkText: 'Come work with us',
    },
  ];

  return (
    <>
      <section className={'background-transparent'}>
        <div className="container-custom">
          <div className="row align-items-center justify-content-center mb-1">
            <h2 className="h2 text-center">Meet The Team</h2>
          </div>
          {(members.length > 0) &&
            <div className="row">
              <div className="team-members">
                {members.map((member, index) => {
                  return (
                    <TeamMember
                      key={index}
                      name={member.name}
                      position={member.position}
                      image={member.image}
                      links={member.links}
                    />
                  )
                })}
              </div>
            </div>
          }
          {(features.length > 0) &&
            <div className="row">
              <div className="team-action-panels">
                {features.map((feature, index) => {
                  return (
                    <FeatureItem
                      key={index}
                      image={feature.image}
                      alt={feature.alt}
                      title={feature.title}
                      content={feature.content}
                      linkUrl={feature.linkUrl}
                      linkText={feature.linkText}
                    />
                  )
                })}
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default TeamBlock