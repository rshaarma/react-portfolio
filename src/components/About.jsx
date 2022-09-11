import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          praesentium voluptates laboriosam fuga accusamus beatae, sapiente et
          adipisci explicabo recusandae eveniet qui saepe quis est! Nobis
          facilis quos modi, pariatur provident hic, distinctio dignissimos ipsa
          saepe rerum suscipit odit? Maxime quos eaque quaerat quisquam
          perferendis maiores quas vero laudantium ab!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed iste
          ullam, accusamus veniam tempore mollitia autem alias dolores enim
          deserunt! Suscipit ipsum quibusdam voluptates inventore, cumque eius
          ipsam aliquam quia excepturi aperiam rem deserunt, voluptas voluptatum
          eaque nulla aspernatur consequatur nemo accusantium saepe. Aliquid id
          fuga molestiae autem voluptates neque non error illum officia odio
          deserunt! Suscipit ipsum quibusdam voluptates inventore, cumque eius
          ipsam aliquam quia excepturi aperiam rem deserunt, voluptas voluptatum
          eaque nulla aspernatur consequatur nemo accusantium saepe. Aliquid id
          fuga molestiae autem voluptates neque non error illum officia odio
        </p>
      </div>
    </div>
  );
};

export default About;
