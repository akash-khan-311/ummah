"use client"; // Required for Next.js App Router

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { FaPlay } from "react-icons/fa";
const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Watch Video Button */}
      <button
        className="flex items-center gap-x-5 px-6 py-3  cursor-pointer text-[#25A7D4]"
        onClick={() => setIsOpen(true)}
      >
        <span className="lg:text-xl">
          <FaPlay />
        </span>
        <span className="underline  capitalize lg:text-xl">
          {" "}
          Watch our Video
        </span>
      </button>

      {/* Overlay with Fade Animation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="km-8iXA5t5s" // Change this to your YouTube video ID
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
