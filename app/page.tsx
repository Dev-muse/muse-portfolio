import Image from "next/image";
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="relative
    flex-col items-center justify-center
    bg-black-100 overflow-hidden
    sm:px-10 px-5 mx-auto">
      <div className='max-w-7xl w-full'>
        <Hero />
      </div>

    </main>
  );
}
