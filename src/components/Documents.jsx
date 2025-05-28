import React from "react";
import {
  FileText,
  ExternalLink,
  Download,
  Shield,
  Database,
} from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    {
      title: "System Design Notes",
      description:
        "Comprehensive notes covering system design principles, scalability patterns, and architectural decisions. Includes real-world examples and best practices for building robust distributed systems.",
      link: "https://drive.google.com/file/d/1gnyw4H8yGmC_1FTDYflK8NWycyg9y74F/view?usp=sharing",
      icon: <Database className="w-6 h-6" />,
      tags: ["System Design", "Architecture", "Scalability"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Secure Coding Practices & Tools",
      description:
        "A detailed guide on secure coding practices, common vulnerabilities, and security tools. Essential resource for developers looking to build secure applications and understand cybersecurity principles.",
      link: "https://drive.google.com/file/d/1NCnSrbXRvb_m2n3XoSSVd-XQnoUSLZwI/view?usp=sharing",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Security", "Best Practices", "Tools"],
      gradient: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="pr-1 pl-1 mb-24">
      {/* Section Header */}
      <div className="flex items-center justify-center mt-12 w-full mb-8">
        <hr className="flex-grow border-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-tight text-gray-800">
          My Documents
        </h2>
        <hr className="flex-grow border-gray-300" />
      </div>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Here are some comprehensive documents I've created to share my knowledge
        and insights. Feel free to explore and learn from them! 📖
      </p>

      {/* Documents Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
          >
            {/* Header with gradient */}
            <div
              className={`bg-gradient-to-r ${doc.gradient} p-4 text-white relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {doc.icon}
                  <h3 className="text-lg font-semibold">{doc.title}</h3>
                </div>
                <FileText className="w-5 h-5 opacity-80" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {doc.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {doc.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium group-hover:bg-gray-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Document</span>
                </a>
                <a
                  href={doc.link.replace(
                    "/view?usp=sharing",
                    "/export?format=pdf",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Note:</span> These documents are
              continuously updated based on new learnings and industry best
              practices. Last updated: January 2025
            </p>
          </div>
        </div>
      </div>

      {/* Closing divider */}
      <div className="flex items-center justify-center mt-12 w-full">
        <hr className="flex-grow border-gray-300" />
        <p className="px-6 text-gray-500 text-sm">
          More documents coming soon! 🚀
        </p>
        <hr className="flex-grow border-gray-300" />
      </div>
    </div>
  );
};

export default DocumentsSection;
