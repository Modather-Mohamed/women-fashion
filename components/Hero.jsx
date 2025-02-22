import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Text */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-6">
              Where <span>Joyful</span> New Brand
            </h1>
            <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem mollitia itaque, incidunt corporis amet distinctio
              nihil laboriosam, voluptate aliquid ab autem asperiores, adipisci
              sed eos est dicta fuga quos cumque.
            </p>

            {/* btn group */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href={`/our-shop`} className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
              <Link href={`/our-shop`} className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Styles</button>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="hidden xl:flex">
            <Image
              src={`/hero/hero.jpg`}
              width={765}
              height={430}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
