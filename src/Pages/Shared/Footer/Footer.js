import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary overflow-hidden footer-container">
      <footer className=" pt-16 pb-28  text-white  2xl:w-[65%] md:w-[75%] w-[80%] mx-auto">
        <div className="grid grid-cols-2 gap-10  mx-auto  sm:flex sm:flex-row sm:justify-between ">
          <div className="flex flex-col text">
            <span className="font-bold mb-4">GET TO KNOW US</span>
            <Link className="hover:text-accent">Terms of Service</Link>
            <Link className="hover:text-accent">Privacy Policy</Link>
            <Link className="hover:text-accent">Refund policy</Link>
            <Link className="hover:text-accent mt-8">Shipping Policy</Link>
            <Link className="hover:text-accent">About Us</Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold mb-4">CATEGORIES</span>
            <Link className="hover:text-accent">Perfume</Link>
            <Link className="hover:text-accent">Deodorants</Link>
            <Link className="hover:text-accent">Mist</Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold mb-4">BRANDS</span>
            <Link className="hover:text-accent">ARMAF</Link>
            <Link className="hover:text-accent">ARMAF ENCHANTED</Link>
            <Link className="hover:text-accent">BIOLUXE</Link>
            <Link className="hover:text-accent">HAVEX</Link>
            <Link className="hover:text-accent">PARIS</Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold mb-4">BROCHURE</span>
            <Link className="hover:text-accent">Armaf</Link>
            <Link className="hover:text-accent">Armaf Enchanted</Link>
            <Link className="hover:text-accent">Flavia</Link>
            <Link className="hover:text-accent">Estiara</Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold mb-4">STORE LOCATION</span>
            <Link className="hover:text-accent w-[300px]">
              Multi Import <br />3rd Floor, 316, Moriswala Building, <br />Saboo Siddik
              Road, Musafir Khana, Mumbai. Maharashtra 400 001.
            </Link>
            <Link className="hover:text-accent mt-4">Contact No. : +91 90764 05205y</Link>
            <Link className="hover:text-accent ">Email - contact@armafperfume.com</Link>
            <Link className="hover:text-accent mt-4">Show some love on Social Media</Link>
          </div>
        </div>
      </footer>
      <div className="text-center bg-primary pt-16 lg:p-8 mb-12 lg:mb-0">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
