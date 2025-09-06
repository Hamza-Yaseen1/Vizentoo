
import React from 'react';

const GetStarted = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 inline">
          Simple step to Get Started! ✨
        </h1>
        <a href="#plans" className="inline-block border-2 border-green-700 text-white px-6 py-2 rounded-full hover:bg-green-600 transition font-bold">
          SEE PLANS
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl">
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">1</div>
          <h2 className="text-md font-semibold mb-2">Choose a plan</h2>
          <p className="text-gray-400 text-sm pt-2">Choose a plan that best suits your needs and budget.</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">2</div>
          <h2 className="text-md font-semibold mb-2">Payment</h2>
          <p className="text-gray-400 text-sm">After selecting your plan and filling out the form, our team will contact you via email to proceed with payment.</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">3</div>
          <h2 className="text-md font-semibold mb-2">Onboarding and brief</h2>
          <p className="text-gray-400 text-sm">After payment, our project manager will guide you through the onboarding process and collect a brief outlining your business and design needs.</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">4</div>
          <h2 className="text-md font-semibold mb-2">Designer assignment</h2>
          <p className="text-gray-400 text-sm">Once the brief is complete, your personal designer is assigned to your project.</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">5</div>
          <h2 className="text-md font-semibold mb-2 ">Task creation & submission</h2>
          <p className="text-gray-400 text-sm">Create and submit your tasks along with any necessary materials (logos, text, images, etc).</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">6</div>
          <h2 className="text-md font-semibold mb-2 text-sm">Feedback & Revisions</h2>
          <p className="text-gray-400 text-sm">After task submission, review the work and provide feedback; our designer will make updates as needed.</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">7</div>
          <h2 className="text-md font-semibold mb-2">Task completion</h2>
          <p className="text-gray-400 text-sm">After task completion, review the work and provide feedback; revisions will make updates as needed.</p>
        </div>
        <div className=" p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">8</div>
          <h2 className="text-md font-semibold mb-2">New task, new project</h2>
          <p className="text-gray-400 text-sm">Once a task is complete, you can create new tasks and continue the process.</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
