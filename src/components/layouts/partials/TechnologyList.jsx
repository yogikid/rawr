import { FaLanguage, FaCloudflare } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer, SiAxios, SiPwa } from 'react-icons/si';

const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs size={20} />, color: 'text-grey-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} />, color: 'text-blue-400' },
  { name: 'Framer Motion', icon: <SiFramer size={20} />, color: 'text-purple-600' },
  { name: 'PWA', icon: <SiPwa size={20} />, color: 'text-indigo-600' },
  { name: 'next-intl', icon: <FaLanguage size={20} />, color: 'text-blue-500' },
  { name: 'Axios', icon: <SiAxios size={20} />, color: 'text-gray-700' },
  { name: 'Cloudflare', icon: <FaCloudflare size={20} />, color: 'text-yellow-500' },
];

const TechnologyList = () => (
  <div className="">
    <ul className="space-y-3">
      {technologies.map((tech, index) => (
        <li key={index} className="flex items-center text-text">
          <div className={`mr-3 ${tech.color}`}>{tech.icon}</div>
          <span>{tech.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TechnologyList;
