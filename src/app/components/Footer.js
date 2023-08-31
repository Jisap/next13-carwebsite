"use client"

import Image from "next/image";
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import Copyright from "./Copyright";
import { motion } from 'framer-motion';
import { fadeIn } from '/variants';
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            
            {/* logo */}
            <Link className="cursor-pointer" to={'home'} smooth={true} spy={true}>
              <Image 
                src={'/icons/logo.svg'}
                width={200}
                height={200}
                alt=''
              />
            </Link>
            
            {/* text */}
            <div className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">officer@carland.com</div>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li><a href="">New York</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Mobile</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">How we work</a></li>
              </ul>
            </div>
          </div>

          {/* programs */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8 ">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div classname="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div classname="text-secondary">Sat:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>

          <div>4</div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer