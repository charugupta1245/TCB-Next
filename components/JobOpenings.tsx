// components/JobOpenings.tsx

import React, { useState } from "react";

const JobOpenings = () => {
  const [openJob, setOpenJob] = useState<number | null>(null); // state to track opened job details

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description:
        "We are looking for a skilled Frontend Developer to join our team building modern web applications with React and Next.js.",
      responsibilities: [
        "Develop and maintain user interfaces using React.js",
        "Optimize applications for maximum performance",
        "Collaborate with designers and backend developers",
        "Implement responsive design principles",
      ],
      requirements: [
        "3+ years of experience with React.js",
        "Proficiency in JavaScript, HTML, and CSS",
        "Experience with Next.js is a plus",
        "Strong problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "Service Desk Analyst",
      department: "IT Support",
      type: "Full-time",
      location: "Pan India (Work from home for 1 year, then Gurgaon)",
      description:
        "Provide technical support, resolve customer technical problems, and ensure smooth network and hardware operation. Excellent opportunity to work in a dynamic, collaborative workplace.",
      responsibilities: [
        "Respond to general inquiries, tickets, and IT hardware/network issues",
        "Perform basic troubleshooting",
        "Understanding of Last mile RF network, IP network basics",
        "Install and maintain Windows OS, desktop software, and antivirus support",
        "Manage day-to-day incident and service requests",
        "Provide ticket status and handle administrative tasks",
      ],
      requirements: [
        "Strong knowledge of network design, LAN/WAN/WLAN implementation",
        "Experience with network protocols like BGP, OSPF, VLAN, QoS",
        "Experience with network hardware and VPNs",
        "Experience with Windows OS and desktop performance optimization",
        "CCNA/CCNP certification is a plus",
        "Ability to create network diagrams and documentation",
      ],
      location: "Pan India (Work from home for 1 year, then Gurgaon)",
      salary:
        "18000/- for first 3 months, post-probation 3.0 to 4.0 lac per annum CTC",
      experience: "0-1 year",
      qualification: "B.Tech/MCA",
      interviewProcess: [
        "Online Technical Test (1hr)",
        "Technical Round - Virtual through Zoom",
        "HR Round - Virtual through Zoom",
      ],
    },
  ];

  const toggleJobDetails = (jobId: number) => {
    if (openJob === jobId) {
      setOpenJob(null); // Close the dropdown if it's already open
    } else {
      setOpenJob(jobId); // Open the clicked job details
    }
  };

  return (
    <section id="openings" className="space-y-8 p-11">
      <h2 className="text-4xl font-bold text-center">Current Openings</h2>
      <div className="space-y-6">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
          >
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <br />
            <div className="flex space-x-4 text-gray-600 dark:text-gray-300">
              <span>{job.department}</span>
              <span>{job.type}</span>
              <span>{job.location}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {job.description}
            </p>
            <br />
            <button
              onClick={() => toggleJobDetails(job.id)}
              className="bg-blue-600 dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:scale-200 transition duration-300"
            >
              {openJob === job.id ? "Show Less" : "More Details"}
            </button>

            {/* Show additional job details when "More Details" is clicked */}
            {openJob === job.id && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xl font-semibold">Responsibilities</h4>
                <ul className="list-disc pl-6">
                  {job.responsibilities.map((resp, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold">Requirements</h4>
                <ul className="list-disc pl-6">
                  {job.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {req}
                    </li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold">Salary</h4>
                <p className="text-gray-700 dark:text-gray-300">{job.salary}</p>
                <h4 className="text-xl font-semibold">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {job.experience}
                </p>
                <h4 className="text-xl font-semibold">Qualification</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {job.qualification}
                </p>
                <h4 className="text-xl font-semibold">Interview Process</h4>
                <ul className="list-disc pl-6">
                  {job.interviewProcess?.map((step, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
