import { Skills } from "@/components/elements/Skills";
import { Maintenance } from "@/components/ui/Maintenance";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaGlobe, FaMobileAlt, FaShapes } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | Yondika's Portfolio",
};

const page = () => {
  return (
    <div className="mx-6 py-40 md:mx-96">
      <div className="flex w-full flex-col items-center justify-center gap-8 text-whitey md:flex-row">
        <div className="h-60 w-60 overflow-hidden rounded-full">
          <img
            src="sayaaa.png"
            alt="Yondika Vio Landa"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center md:w-2/3 md:text-left">
          <h1
            className="text-5xl font-bold text-goldy"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Yondika Vio Landa
          </h1>
          <p className="mt-8 text-justify">
            An{" "}
            <span className="font-bold">
              undergraduate Informatics Engineering
            </span>{" "}
            program at the Sumatera Institute of Technology, passionate about
            pursuing a career in development. Skilled in{" "}
            <span className="font-bold">mobile development</span>
            tools such as <span className="font-bold">Kotlin</span> and{" "}
            <span className="font-bold">React Native</span>, as well as
            <span className="font-bold">web development</span> using{" "}
            <span className="font-bold">HTML, CSS and JavaScript</span>. A
            detail-oriented individual with a successful track record of
            managing several projects fueled by a strong interest in mobile and
            web development.
          </p>
        </div>
      </div>
      <h2 className="pt-24 text-center text-4xl font-bold text-goldy">
        Courses
      </h2>

      <h3 className="pt-24 text-2xl text-whitey">Mobile Development</h3>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="https://www.dicoding.com/certificates/2VX3RV3DQZYQ"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Membuat Aplikasi Flutter untuk Pemula
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/4EXGQ15WGZRL"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Memulai Pemrograman dengan Dart
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/QLZ97708EP5D"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Pengembangan Aplikasi Android Intermediate
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/0LZ06DGQKZ65"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Penerapan Machine Learning untuk Android
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/JMZVDY1WQZN9"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Fundamental Aplikasi Android
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/N9ZOOR816ZG5"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Membuat Aplikasi Android untuk Pemula
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/6RPNV00R4Z2M"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Memulai Pemrograman dengan Kotlin
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
      </div>

      <h3 className="pt-24 text-2xl text-whitey">Web Development</h3>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="https://www.dicoding.com/certificates/1OP8WDLW1XQK"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Membuat Front-End Web untuk Pemula
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/1OP8010WVXQK"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Dasar Pemrograman JavaScript
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/1RXYY8KJ9XVM"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">Belajar Dasar Pemrograman Web</p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
      </div>

      <h3 className="pt-24 text-2xl text-whitey">Software Development</h3>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="https://www.dicoding.com/certificates/81P2V0D9NPOY"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">Belajar Dasar AI</p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/81P2VYN2YPOY"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Prinsip Pemrograman SOLID
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/N9ZOONEMYZG5"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Belajar Dasar Git dengan GitHub
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/98XW2067WPM3"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Memulai Dasar Pemrograman untuk Menjadi Pengembang Software
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
        <Link
          href="https://www.dicoding.com/certificates/N9ZO60GJDXG5"
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#5C5C5C] p-4 hover:bg-[#363636] md:h-24"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p className="text-goldy md:text-xl">
            Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)
          </p>
          <p className="text-whitey">Dicoding Indonesia</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
