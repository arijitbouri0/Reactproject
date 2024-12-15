import React from 'react';
import PostCard from './PostCard';
import EventList from './EventList';
import JobList from './JobList';
import { RecommendedGroups } from './RecomendedGroups';
import FilterComponent from './FilterComponent';

const posts = [
  {
    category: '✍️ Article',
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine...',
    author: { name: 'Sarthak Kamra', image: 'https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W41oG1ipv35JCRV64CmKEI16UpDhoDWCXp6ESSLHoFpyYYCLR2JEG33e5RMKOreQ3I8Nvn80HZqqE4pCeCa~MeEirF2gz-PDFV~us1dFK80VyHv67YUtVjWFX3pNPFqLlhdRf7RK7yShjNpFmbFuVd3B4XmUZM5LnQorUgk22C18mvYb3cRgyLoAhF2kJ58fhANKGfHJtavlvQusnSdWHP4LBvnjDsJ9b9D~QjqwDmzbd8TXPHHNGM2P-I7eE-04JiUmb81LcxKVhMFm~~WzQyPoCwRN6-AdsCVRf3ETv7NANqBJ1YrEny6Ax3x6GGQnzyuvOFKEthq2JOnuzIU-rw__' },
    views: '1.4k',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfycwbyFY61ODnYAkIT2yfoEVyy255PmkDhb8AVOvUKL4Z3wiU0RJZRlNqkXIIsXSGjmDjhDd09UfdIOIEPfoTfPIngr3w5w43Vpj3lBaWRXo7aX3Fk1PluOL8wuHpJRvYu9n2npop1babxXS7qEwIygxdnKBSGzru~BStt~vPGD00k9i1S4Sjc5FgKbTklfcI-p2F4ReoHwYgFLnzk-VnydXEuTpsAfwsMqaOLjyTjTGuM7p9UB9Hv~KfvFcZ~TuzEU11f~tW9hoJJhzmsWJ26wSweIEhNondoIeTIGjXP8AnT6iS8gJJRX8aw5zMa2CtajlAeBl1xvHRjsPh~z3A__',
  },
  {
    category: '🔬 Education',
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine...',
    author: { name: 'Sarah West', image: 'https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LYU3t9wu~oZDvpIP8xuEw1ceSKzRVRWE7dvTnnFSJq8L~x77tqe6y74LSl0B75YfPou8Clod~7yz45vdL56HNpzLM5aprogZZjbDJMZapVJmX-XoXhAKwe0HabaQRtgji7~DGkP~-aYTel-VHciC-EHO~7A4l-mNDUgbTTsUBaq3KIfFjhw8pWAFds6wF1o-J9VcWVeCyi15C~0j20jScFwOcIb9SIhevZjdmhuvdKfj1ITrtaT1n9UwdJvUP70P3Inc-FP0YH3E0ZuJCFLIHdgwr2d3i22YEXMoPzRBPOPfq3TrN5MXa4aYLW3JistWsata0HcWrO3Tkv1Jq9VsLQ__' },
    views: '1.4k',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7RQ69rjQX1XvKBUG7gByUCuyP0X1FMN3vyEwIDipAdLnAoffvnCjPk~ef76vRyKjpMjR78rG7nd40r5GPzpNCAVDWJ41jy7plLSE0IdMDVw5vkFh0guV1iWtio273OUrPUG5LOvYIECaFgCRcLT9FdI97ImyNuhM7LzDZwzOoCsdaFQgxLNIozUlbpKi8vvP8Sj-Km6LqysY3G5UZm4-gCwnz6AiN0IUOZbDqJp2C60SGo83CoNh5GH2jXjrbUsLZAfnBZzVJwUpQT1pHN6s~QZPci0IWx-AIcuRuLpEXXtsynDYft0xv6iD29BejkDeLejp39sCPRx5PASJ7-KRA__',
  },
];

const PostList = () => {
  return (
    <>
      <FilterComponent />
      <div className="flex flex-wrap md:flex-nowrap place-content-center">
        <div className="w-[692px] p-4">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
          <EventList />
          <JobList />
        </div>
        <div className="w-auto p-4">
          <RecommendedGroups />
        </div>
      </div>
    </>
  );
};

export default PostList;
