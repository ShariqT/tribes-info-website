import { XIcon } from "../assets/icons/XIcon";
import { RedditIcon } from "../assets/icons/RedditIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

const footerData = [
  {
    title: "Learn More",
    items: [
      {name: "Protocol Spec", href: "https://docs.tribes.ltd/protocol/"}, 
      {name: "Server Software", href: "https://docs.tribes.ltd/guides/vps-instructions/"}, 
      {name: "Tribes Ecosystem", href: "https://docs.tribes.ltd/guides/ecosystem"}],
  },
  {
    title: "Important Links",
    items: [
      {name: "Get the Tribes Client", href:"https://www.google.com"},
      {name: "Privacy Policy", href:"/privacy"}
    ],
  },
  {
    title: "Company",
    items: [
      {name: "About Us", href: "/about"}, 
      {name: "Contact Us", href: "/contact"}],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Tribes
                </div>
              </div>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://x.com/chief_tribes"
                  aria-label="Twitter (now X)"
                >
                  <XIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.reddit.com/r/FindingYourTribe/"
                  aria-label="Reddit"
                >
                  <RedditIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Products</h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Company</h3>
                <ul>
                  {footerData[2].items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
