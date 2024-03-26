import Layout from "@/components/Layout";
import Image from "next/image";
import "../../app/globals.css";

function About() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-between items-center bg-yellow-400">
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="max-w-3xl ">
            <h1 className="text-4xl font-bold mb-4 text-[#344156]">About Us</h1>
            <p className="text-lg mb-4 text-[#344156]">
              Welcome to our movie website!
            </p>
            <p>Here is the team:</p>

            <div className="grid grid-cols-2 gap-4 mt-4 justify-center">
              <div className="bg-[#344156] p-4 rounded-lg flex flex-col items-center">
                <Image
                  src="/img/about/Nada.png"
                  alt="Nada"
                  width={300}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="text-xl font-semibold mb-1 text-white">Nada</h3>
              </div>
              <div className="bg-[#344156] p-4 rounded-lg flex flex-col items-center">
                <Image
                  src="/img/about/Papula.jpg"
                  alt="Papula"
                  width={300}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="text-xl font-semibold mb-1 text-white">
                  Papula
                </h3>
              </div>

              <div className="bg-[#344156] p-4 rounded-lg flex flex-col items-center">
                <Image
                  src="/img/about/didam.jpg"
                  alt="Mohammed"
                  width={300}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="text-xl font-semibold mb-1 text-white">Didam</h3>
              </div>

              <div className="bg-[#344156] p-4 rounded-lg flex flex-col items-center">
                <Image
                  src="/img/images/episode_img.jpg"
                  alt="Contributor 4"
                  width={300}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="text-xl font-semibold mb-1 text-white">
                  Mohammad
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
