import { Instagram } from "lucide-react";

const FloatingInstagram = () => {
  return (
    <a
      href="https://www.instagram.com/domricardohospedaria/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Siga no Instagram"
    >
      <div className="relative">
        {/* Button */}
        <div className="relative bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
          <Instagram className="w-6 h-6 text-white" />
        </div>
      </div>
    </a>
  );
};

export default FloatingInstagram;
