import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "WhatsApp", logo: "https://logo.clearbit.com/whatsapp.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Twitter", logo: "https://logo.clearbit.com/twitter.com" },
];

const Companies = () => {
  return (
    <div className="bg-gray-50 py-4 md:py-10">
      {/* Title with animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-400 mb-6 flex justify-center items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        < Link2 className="w-9  h-11   md:w-10 md:h-10 text-red-600" />
        Trusted by Leading Companies                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </motion.h2>


<div>

  {/* Marquee Effect for Company Logos */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} className="px-6 md:px-12 h-40 mt-5">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-xl border-2  hover:border-yellow-700   items-center mx-4 md:mx-8 "
            whileHover={{ scale: 1.1 }}
           
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-20 h-18 md:w-24   object-contain shadow-md bg-gray-100 p-2  rounded-xl"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
            />
            <p className="text-base   md:text-lg font-medium text-gray-600 mt-2">{company.name}</p>
          </motion.div>
        ))}
      </Marquee>

</div>
      
    </div>
  );
};

export default Companies;