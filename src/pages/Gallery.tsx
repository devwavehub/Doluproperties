import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../data/galleryImages';
import villaAlora1 from '../assets/VILLA ALORA1.jpg';

const Gallery = () => {
  const images = useMemo<string[]>(() => galleryImages, []);
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >

      {/* ================= HERO HEADER ================= */}

      <section className="relative w-full min-h-[320px] sm:min-h-[380px] overflow-hidden">

        {/* Background Image */}
        <img
          src={villaAlora1}
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Yellow Overlay */}
        <div className="absolute inset-0 bg-primary/40" />

        {/* Dark Tint for Text */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6 pt-24 sm:pt-32">

          <div className="max-w-2xl">

            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur text-white text-sm">
              Photo Collection
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Gallery
            </h1>

            <p className="mt-4 text-white/95 text-sm sm:text-base leading-relaxed">
              Explore photos from our estates, environments,
              and property developments across Port Harcourt.
            </p>

          </div>

        </div>

      </section>


      {/* ================= GALLERY GRID ================= */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {images.length === 0 ? (

          <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-10 text-center">
            <p className="text-grayText">
              No images yet. Drop pictures into
              <span className="font-semibold"> src/gallery </span>
              and refresh.
            </p>
          </div>

        ) : (

          <>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

              {images.map((src: string, idx: number) => (

                <button
                  key={idx}
                  onClick={() => setActive(src)}
                  className="group relative rounded-2xl overflow-hidden border border-black/5 bg-bgLight shadow-sm hover:shadow-lg transition"
                  type="button"
                >

                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-[170px] sm:h-[220px] lg:h-[240px] object-cover group-hover:scale-[1.03] transition"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

                </button>

              ))}

            </div>



            {/* ================= LIGHTBOX ================= */}

            {active && (

              <div
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
                onClick={() => setActive(null)}
              >

                <div
                  className="relative w-full max-w-6xl"
                  onClick={(e) => e.stopPropagation()}
                >

                  <button
                    onClick={() => setActive(null)}
                    className="absolute -top-12 right-0 text-white flex items-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    Close
                  </button>


                  <div className="rounded-3xl overflow-hidden bg-black">

                    <img
                      src={active}
                      alt="Selected"
                      className="w-full max-h-[80vh] object-contain"
                    />

                  </div>

                </div>

              </div>

            )}

          </>

        )}

      </div>

    </motion.div>
  );
};

export default Gallery;