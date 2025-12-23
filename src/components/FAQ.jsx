import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Is this project open source?",
    answer:
      "Yes. The Tribes server software is open source and there is a link to the Github repo at the top of this webpage. You can also find a link to the Github repo the docs website."
  },
  {
    question: "Where can I host my Tribes server?",
    answer:
      "You can host a Tribes server anywhere. You can host it on a Raspberry Pi, a VPS, or even the computer that you are reading this from right now. Tribes servers have a small footprint which make them very versitle."
  },
  {
    question: "How exactly is my privacy protected by using this?",
    answer:
      "In two ways. First, Tribes uses PGP encryption. This is a gold standard encryption scheme that has been battle-tested and is still used to secure servers run by Google and Amazon. Using PGP to encrypt your messages is like using a steel vault as the front door to your house. No one is getting inside. Second, Tribes servers are built to NOT store information for long periods of time. After 5-6 hours, data is erased. This means, if by some reason, hackers get into the server, they will not have much to gain. There will be only an record that you were a member of the server but nothing of what you posted nor chatted."
  },
  {
    question: "How to get support for the product?",
    answer:
     "If you have questions about the Tribes server software, you can post them on the Gitub repo as issue. Questions about the Tribes client, can be directed at chief@tribes.ltd"
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Have any questions?</p>
          <h2 className="mb-16 block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
