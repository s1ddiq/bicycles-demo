"use client";
import Button from "@/components/Button";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { ChevronDown, ChevronRight, FileInput, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Navbar />
      <section className="flex-1 h-1/2 bg-[url(/images/cover.jpg)] bg-tope px-24 pt-6 pb-24">
        <div className="flex w-full justify-center items-center pt-24 flex-col text-center text-black space-y-8">
          <h1 className="text-8xl">
            Be prepared <br /> for any road
          </h1>
          <p>Bicycles that give freedom and confidence on every kilometer</p>
          <Button text="Shop now" type="inset" />
        </div>
      </section>
      <section className="flex flex-col w-full bg-white pt-24 px-24 text-black pb-24 gap-8">
        <div className="flex flex-row w-full justify-between">
          <p className="text-3xl">New arrivals</p>
          <Button text="Catalog" type="outline" />
        </div>

        <div className="flex gap-8">
          <ItemCard name="Traverse 15" price={750} image="/svg/bike2.svg" />
          <ItemCard name="Nevada 26.19 V" price={530} image="/svg/bike2.svg" />
          <ItemCard name="Feather" price={760} image="/svg/bike3.svg" />
          <ItemCard name="Ambent 29 Eqp" price={3150} image="/svg/bike4.svg" />
        </div>
      </section>

      <section className="pt-24 px-24 pb-24 gap-8">
        <div className="flex justify-between items-end">
          <p className="text-3xl lg:w-2/5">
            Our company has been on the market for over 10 years and has
            established itself as a reliable supplier of quality bicycles and
            accessories.
          </p>
          <Button text="Catalog" type="outset" />
        </div>

        <div className="w-full flex gap-8 pt-24">
          <StatCard
            percentage="96+"
            text="A wide range of bike models, ciry, mountain, sports, and children's bikes We're sure you'll find the perfect one for your needs."
          />
          <StatCard
            percentage="15+"
            text="A wide range of bike models, ciry, mountain, sports, and children's bikes We're sure you'll find the perfect one for your needs."
          />
          <StatCard
            percentage="10+"
            text="A wide range of bike models, ciry, mountain, sports, and children's bikes We're sure you'll find the perfect one for your needs."
          />
          <StatCard
            percentage="100%"
            text="A wide range of bike models, ciry, mountain, sports, and children's bikes We're sure you'll find the perfect one for your needs."
          />
        </div>
      </section>

      <section className="pt-24 px-24 pb-24 gap-8 w-full bg-[url('/images/man-on-mountain.png')] bg-position-[right_bottom_-20rem] h-full">
        {/* make image absolute here  */}
        <div className="flex flex-col gap-24">
          <p className="text-3xl lg:w-2/5">
            Choosing a bike depends on many factors; the type of terrain you'll
            be riding on, your physical abilities. and your personal
            preferences.
          </p>
          <Button text="Catalog" type="filled" />
        </div>
      </section>

      <section className="pt-24 px-24 pb-24 gap-8 w-full bg-transparent h-full flex justify-center items-center">
        {/* make image absolute here  */}
        <div className="flex flex-col gap-8 text-center">
          <p className="text-3xl text-center">
            Contact us 
          </p>
          <div className="flex gap-6 flex-col w-full">
            <div className="flex gap-6">
              <div className="w-1/2">
                <p className="text-lg">First Name *</p>
                <input type="text" className="border-2 border-gray-400 w-full h-12 bg-white text-black" />
              </div>
              <div className="w-1/2">
                <p className="text-lg">Last Name (optional)</p>
                <input type="text" className="border-2 border-gray-400 w-full h-12 bg-white text-black" />
              </div>
            </div>
            <div className="w-full">
              <textarea className="w-full border-2 border-gray-400 bg-white text-black"></textarea>
            </div>
          <Button text="Send " type="filled" className="!w-full" />
          </div>
        </div>

      </section>

      <footer className="w-full text-center h-24 border-t flex justify-center items-center" onClick={() => setShowModal(true)}>
        <p className="text-xl">Made by s1ddiq</p>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <X
              onClick={() => setShowModal(false)}
              className="text-black absolute right-6"
              size={32}
            />
            <h2 className="text-xl font-bold mb-4 text-black">
              This is only a sample page
            </h2>
            <p className="mb-4 text-gray-800">
              This is a project created by s1ddiq. If you're looking for a
              custom website, web app, or need any development work, I'm here to
              help. Feel free to reach out to me via any of the contact options
              below.
            </p>

            <div className="flex flex-col">
              <Link
                href={`https://github.com/s1ddiq`}
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
              >
                Check out my GitHub
              </Link>
              <Link
                href="mailto:bruhs1ddiq@gmail.com"
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
              >
                Email: bruhs1ddiq@gmail.com
              </Link>
              <Link
                href={`https://www.reddit.com/user/AcrobaticTadpole324/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button`}
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
              >
                Follow me on Reddit
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
