import Image from "next/image";

const Contactheroku = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Finance Hero"
        layout="fill"
        objectFit="cover"
        className="brightness-90"
      />

      {/* Overlay Content at Bottom - 75% width, aligned to left */}
      <div className="absolute bottom-0 w-3/4 bg-black bg-opacity-80 text-white p-6 md:p-12 lg:p-16">
        <h1 className="text-2xl md:text-4xl font-semibold">Contact us</h1>
        <p className="mt-2 md:mt-4 text-lg">
          Building an insight-driven finance function
        </p>
        {/* Share Button */}
      </div>
    </div>
  );
};

export default Contactheroku;
