import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine, FaLock, FaChartBar, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaLink className="text-blue-600 text-3xl mb-2" />,
    title: "Simple URL Shortening",
    description: "Create short, memorable URLs in seconds. Easy for everyone to use.",
  },
  {
    icon: <FaShareAlt className="text-green-600 text-3xl mb-2" />,
    title: "Powerful Analytics",
    description: "Track clicks, locations, and referrals to optimize performance.",
  },
  {
    icon: <FaEdit className="text-purple-600 text-3xl mb-2" />,
    title: "Enhanced Security",
    description: "Advanced encryption keeps your data and links secure.",
  },
  {
    icon: <FaChartLine className="text-red-600 text-3xl mb-2" />,
    title: "Fast & Reliable",
    description: "Enjoy high uptime and fast redirects.",
  },
  {
  icon: <FaShareAlt className="text-green-600 text-3xl mb-2" />,
  title: "Powerful Link Sharing",
  description: "Easily share shortened links across platforms and social media.",
},
{
  icon: <FaLock className="text-purple-600 text-3xl mb-2" />,
  title: "Privacy & Protection",
  description: "Secure your links with password protection and advanced privacy controls.",
},
{
  icon: <FaChartBar className="text-red-600 text-3xl mb-2" />,
  title: "Advanced Analytics",
  description: "Get detailed insights like location, device, and referral source.",
},
{
  icon: <FaMobileAlt className="text-yellow-500 text-3xl mb-2" />,
  title: "Mobile-Friendly Design",
  description: "Shortify is fully responsive and works great on all devices.",
}

];

const faqs = [
  {
    question: "What is Shortify?",
    answer: "Shortify is a URL shortening and analytics platform that helps you manage and track your links with ease.",
  },
  {
    question: "Is Shortify free to use?",
    answer: "Yes! Shortify offers free URL shortening with basic features. For advanced analytics, you can upgrade to a premium plan.",
  },
  {
    question: "How secure is my data?",
    answer: "We prioritize security by employing advanced encryption techniques to protect your links and personal data.",
  },
  {
  question: "Can I track who clicks my links?",
  answer: "Yes, Shortify provides powerful analytics including location, device, and referral tracking for each link.",
},
{
  question: "Do my shortened URLs expire?",
  answer: "By default, your links do not expire. However, you can set custom expiration dates for time-sensitive links.",
},
{
  question: "Can I customize my short URLs?",
  answer: "Absolutely! You can personalize the slug portion of the URL to make it branded and memorable.",
},
{
  question: "Does Shortify work on mobile devices?",
  answer: "Yes, Shortify is fully responsive and works seamlessly across all mobile, tablet, and desktop devices.",
}

];

const testimonials = [
  {
    quote: "Shortify has made URL shortening so much easier, and the analytics are a game-changer for tracking my campaigns.",
    name: "John Doe",
    role: "Marketing Specialist",
  },
  {
    quote: "I love how fast and reliable Shortify is. The security features make me feel confident about using it for my business.",
    name: "Jane Smith",
    role: "Small Business Owner",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-5 sm:px-8 lg:px-14 py-10">
      {/* About Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 italic mb-4">About Shortify</h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Shortify is your go-to platform for effortless URL shortening, link management, and powerful analytics. 
          With just a few clicks, you can create, track, and manage short URLs, all while ensuring top-notch 
          security and performance.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            {feature.icon}
            <h3 className="text-xl font-semibold text-slate-800 mb-1">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Link
          to="/register"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Get Started with Shortify
        </Link>
      </div>

      {/* FAQs Section */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-slate-700 mb-1">{faq.question}</h4>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">What Our Users Say</h2>
        <div className="grid gap-4">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="italic text-gray-600 mb-2">"{item.quote}"</p>
              <p className="font-semibold text-slate-800">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
