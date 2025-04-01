"use client";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function Two() {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Contact Us | The Capital Box</title>
        <meta
          name="description"
          content="Get in touch with our team through our contact form."
        />
      </Head>

      <div
        className={`py-12 px-6 lg:px-8 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-3">
                Contact Information
              </h2>

              <p>Address: South City 1, Sector 41, Gurugram</p>
              <p>
                Phone: <span className="font-bold">+91 124 428 427</span>
              </p>
              <p>
                Website:{" "}
                <a href="https://thecapitalbox.com" className="text-blue-500">
                  TheCapitalBox.com
                </a>
              </p>
              <p>
                General Enquiry Email:{" "}
                <a
                  href="mailto:contactus@thecapitalbox.com"
                  className="text-blue-500"
                >
                  contactus@thecapitalbox.com
                </a>
              </p>
              <p>
                HR Enquiry Email:{" "}
                <a
                  href="mailto:jobs@thecapitalbox.com"
                  className="text-blue-500"
                >
                  jobs@thecapitalbox.com
                </a>
              </p>
            </div>

            {/* Responsive Google Map */}
            <div className="w-full h-full aspect-[16/9] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.717263558402!2d77.05910597512325!3d28.457938275760487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f13b9f9747%3A0x1d435dd79f8088a5!2sTHE%20CAPITAL%20BOX!5e0!3m2!1sen!2sin!4v1743431381242!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
