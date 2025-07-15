import React from "react";
import one from '../assets/1.avif';
import two from '../assets/2.webp';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.webp';
import six from '../assets/6.jpg';
import seven from '../assets/8.avif';
import nine from '../assets/9.jpg';
import ten from '../assets/10.jpg';
import eleven from '../assets/12.jpg';
import { motion } from "framer-motion";

// Utility Card component
const AnimeCard = ({ src, title, date }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative h-full w-full cursor-pointer overflow-hidden rounded-2xl shadow-lg"
  >
    <img
      src={src}
      alt={title}
      className="h-full w-full object-cover object-center"
    />
    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    <div className="absolute bottom-2 left-2 text-white sm:bottom-4 sm:left-4">
      <p className="mb-1 text-xs font-semibold text-red-400 sm:text-sm">{date}</p>
      <h3 className="text-sm font-bold leading-tight drop-shadow-lg sm:text-lg">
        {title}
      </h3>
    </div>
  </motion.div>
);

const galleryData = [
  {
    src: four,
    title: "Yuri Kuma Arashi Viverra Tortor Pharetra",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 2, lg: 2 },
    rowspan: { base: 2, sm: 2, md: 2, lg: 2 },
  },
  {
    src: five,
    title: "Fate/Stay Night: Unlimited Blade World",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: nine,
    title: "Yuri Kuma Arashi Viverra Tortor Pharetra",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: seven,
    title: "Boku no Hero Academia Season 4 - 18",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: six,
    title: "Building a Better LIA Drilling Down",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: one,
    title: "Fate/Stay Night: Unlimited Blade World",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: two,
    title: "Housekishou Richard shi no Nazo Kantei Season 08 - 20",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 2, lg: 2 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: three,
    title: "Boku no Hero Academia Season 4 - 18",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: ten,
    title: "Fate/Stay Night: Unlimited Blade World",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
  {
    src: eleven,
    title: "Yuri Kuma Arashi Viverra Tortor Pharetra",
    date: "01 March 2020",
    colspan: { base: 2, sm: 2, md: 1, lg: 1 },
    rowspan: { base: 1, sm: 1, md: 1, lg: 1 },
  },
];

const AnimeGallery = () => {
  return (
    <section className="mx-auto max-w-7xl p-2 sm:p-4 bg-black">
      <div
        className="grid grid-cols-2 gap-2 auto-rows-[150px] 
          sm:grid-cols-4 sm:gap-3 sm:auto-rows-[200px]
          md:grid-cols-6 md:gap-4 md:auto-rows-[250px]
          lg:grid-cols-6 lg:gap-4 lg:auto-rows-[300px]"
      >
        {galleryData.map((item, idx) => (
          <div
            key={idx}
            className={`
              col-span-${item.colspan.base}
              sm:col-span-${item.colspan.sm}
              md:col-span-${item.colspan.md}
              lg:col-span-${item.colspan.lg}
              row-span-${item.rowspan.base}
              sm:row-span-${item.rowspan.sm}
              md:row-span-${item.rowspan.md}
              lg:row-span-${item.rowspan.lg}
            `}
          >
            <AnimeCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimeGallery;