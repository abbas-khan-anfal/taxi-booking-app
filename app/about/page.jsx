import React from "react";
import Title from "../components/Title/Title";
import Image from "next/image";
import Jumbo from "../components/Jumbotron/Jumbo";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Page() {
  return (
    <>
    <Navbar/>
    <Jumbo text="About Us" />
    <section className="px-10 py-20 md:py-30 lg:py-40">
      <div className="space-y-10 rounded-md p-5">

        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <Title text="Who We Are?" size="lg" classes="mb-5" />
            <p className="text-[18px] text-black text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam tempora, harum est ea molestias beatae ipsa perferendis, repellat sit dicta blanditiis! Autem aut reiciendis quod sit non repellat consequatur!
            </p>
          </div>
          <div>
            <Image
              src="/hero1.jpg"
              width={1000}
              height={1000}
              className="h-full w-full object-contain rounded-md"
              alt="hero1"
            />
          </div>
        </div>

        {/* Section 2 (swapped order) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div className="order-2 sm:order-1">
            <Image
              src="/hero2.jpg"
              width={1000}
              height={1000}
              className="h-full w-full object-contain rounded-md"
              alt="hero2"
            />
          </div>
          <div className="order-1 sm:order-2">
            <Title text="Who We Are?" size="lg" classes="mb-5" />
            <p className="text-[18px] text-black text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure assumenda
              delectus aut rem vero, cupiditate debitis quos fugiat recusandae illum nemo.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <Title text="Who We Are?" size="lg" classes="mb-5" />
            <p className="text-[18px] text-black text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure assumenda
              delectus aut rem vero, cupiditate debitis quos fugiat recusandae illum nemo.
            </p>
          </div>
          <div>
            <Image
              src="/hero3.jpg"
              width={1000}
              height={1000}
              className="h-full w-full object-contain rounded-md"
              alt="hero3"
            />
          </div>
        </div>

      </div>
    </section>

    <Footer/>
    </>
  );
}

export default Page;
