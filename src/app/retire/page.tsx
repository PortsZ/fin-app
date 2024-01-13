'use client';
import React from "react";
import { useForm } from "react-hook-form";
 


const page = () => {
  const { register, handleSubmit, watch } = useForm();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-16 py-16">
      <section
        className="flex flex-col flex-1 bg-gradient-to-tr from-sky-300 to-sky-500 w-full h-full 
      text-black p-16 justify-start items-start rounded-lg gap-6"
      >
        <div className="w-full">
          <h1 className="text-2xl font-bold">Me Aposenta!</h1>
        </div>
        <div className="w-full flex justify-center gap-6">
          <div>FORM</div>
          <div>CHARTS</div>
        </div>
      </section>
    </main>
  );
};

export default page;
