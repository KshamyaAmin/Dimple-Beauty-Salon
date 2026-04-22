import React from 'react';

export const ImageAutoSlider = ({ images = [], direction = 'left' }) => {
  // Return null if no images are provided
  if (!images || images.length === 0) return null;

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];
  
  // Calculate duration based on number of images to keep speed consistent
  // Roughly 8 seconds per image provides a smooth, premium feel
  const scrollDuration = images.length * 8;

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .infinite-scroll-left {
          animation: scroll-left var(--duration) linear infinite;
        }

        .infinite-scroll-right {
          animation: scroll-right var(--duration) linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.6s ease;
        }

        .image-item:hover {
          transform: scale(1.04);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-4">
          <div className="scroll-container w-full">
            <div 
              className={`flex gap-6 w-max px-6 ${direction === 'right' ? 'infinite-scroll-right' : 'infinite-scroll-left'}`}
              style={{ '--duration': `${scrollDuration}s` }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[color:var(--gold)]/10"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
