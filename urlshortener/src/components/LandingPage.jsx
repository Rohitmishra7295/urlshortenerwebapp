import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaLock, FaRocket } from "react-icons/fa"; // Importing React Icons
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import Companies from "./Companies";
import image from "../assets/image.png";

let desc =
  "Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const dashBoardNavigateHandler = () => {
    navigate("/dashboard");
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Simulate newsletter subscription action
      console.log(`Subscribed with email: ${email}`);
    }
  };

  return (
    <div>
      <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
            >
              Shortify Simplifies URL Shortening For Efficient Sharing.
            </motion.h1>
            <p className="text-slate-700 text-sm my-5">
              Shortify streamlines the process of URL shortening, making sharing links effortless and efficient. With its user-friendly interface, Linklytics allows you to generate concise, easy-to-share URLs in seconds. Simplify your sharing experience with Linklytics today.
            </p>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={dashBoardNavigateHandler}
                className="bg-custom-gradient w-40 text-white rounded-md py-2"
                aria-label="Go to Manage Links"
              >
                Manage Links
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={dashBoardNavigateHandler}
                className="border-btnColor border w-40 text-btnColor rounded-md py-2"
                aria-label="Create Short Link"
              >
                Create Short Link
              </motion.button>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sm:w-[480px] w-[400px] object-cover rounded-md"
              src={image}
              alt="Shortify Platform"
            />
          </div>
        </div>

        <div className="sm:pt-12 pt-7">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
          >
            Trusted by individuals and teams at the world's best companies
          </motion.p>

          <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
            <Card
              title="Simple URL Shortening"
              desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
              icon={<FaLink className="text-3xl text-blue-600 mr-3" />} // Icon added
            />
            <Card
              title="Powerful Analytics"
              desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
              icon={<FaChartLine className="text-3xl text-blue-600 mr-3" />} // Icon added
            />
            <Card
              title="Enhanced Security"
              desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
              icon={<FaLock className="text-3xl text-blue-600 mr-3" />} // Icon added
            />
            <Card
              title="Fast and Reliable"
              desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
              icon={<FaRocket className="text-3xl text-blue-600 mr-3" />} // Icon added
            />
          </div>
        </div>

        {/* Why Choose Us? Section */}
        <section className="bg-gray-100 py-12">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Why Choose Shortify?
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Easy to Use</h3>
              <p className="text-slate-600">
                Shortify's user-friendly interface makes it easy for anyone to create and manage their links with just a few clicks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Comprehensive Analytics</h3>
              <p className="text-slate-600">
                Get detailed insights into the performance of your links with powerful analytics tools, helping you optimize your strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Scalable & Secure</h3>
              <p className="text-slate-600">
                With robust security and scalable infrastructure, Shortify grows with your needs and keeps your links safe.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">
              Stay updated with the latest news, features, and tips from Shortify. Join thousands of users who receive exclusive updates!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-md w-2/3"
                required
              />
              <button type="submit" className="bg-white text-blue-600 py-2 px-6 rounded-md w-1/3">
                Subscribe
              </button>
            </form>
            {isSubscribed && <p className="mt-4 text-green-300">Thank you for subscribing!</p>}
          </div>
        </section>
      </div>

      <Companies />
    </div>
  );
};

export default LandingPage;
