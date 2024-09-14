import { footerLinks } from "@/constance";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 xl:py-16  bg-black text-white ">
      <div className="container mx-auto ">
        <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <h3 className="text-accent font-montserrat text-2xl font-medium leading-normal">
                Elhdad Store
              </h3>
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get ready for the new term at your nearest Elhdad store. Find your
              perfect Brand In Our Store. Get Rewards
            </p>
          </div>

          <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
            {footerLinks.map((link) => (
              <div key={link.id}>
                <h4 className="mb-6 text-2xl font-medium leading-normal  font-montserrat cursor-pointer text-accent">
                  {link.title}
                </h4>
                <ul className="">
                  {link.links.map((item) => (
                    <li
                      key={item.id}
                      className="mt-3 text-base leading-normal cursor-pointer text-white-400 font-montserrat hover:text-slate-gray"
                    >
                      <Link
                        className="hover:text-slate-400 transition-all duration-300"
                        href="/"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
          <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
            <p className="text-accent">Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer font-montserrat text-accent">
            Elhdad Store
          </p>
        </div>
      </div>
    </footer>
  );
}
