import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col gap-8">
      <p className="text-white text-center text-sm font-semibold text-shadow-[0_0_8px_rgba(255,255,255)] sm:text-base">
        Desarrollador por JhuniorCq
      </p>

      <div className="flex gap-4 items-center justify-center text-white">
        <a href="https://github.com/JhuniorCq" target="_blank">
          <FaGithub className="text-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 sm:text-3xl" />
        </a>

        <span className="select-none">|</span>
        <a
          href="https://www.linkedin.com/in/holiver-jhunior-ccora-quispe-0a0642258"
          target="_blank"
        >
          <FaLinkedin className="text-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 sm:text-3xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
