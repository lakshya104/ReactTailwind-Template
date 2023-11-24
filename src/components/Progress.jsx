import laptop from "../assets/coding-on-laptop.jpg";

const Progress = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-12 p-16">
      <div>
        <figure>
          <img
            className="w-96 rounded-3xl"
            src={laptop}
            alt="coding on laptop"
          />
        </figure>
      </div>
      <div className="flex items-start justify-center flex-col gap-6 ">
        <h2 className="text-3xl text-indigo-900 font-bold">Secure Features</h2>
        <p className="text-sm text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit <br /> Lorem
          ipsum dolor, sit amet consectetur adipisicing elit <br /> Lorem ipsum
          dolor sit amet..
        </p>
        <div className="w-full">
          <div className="w-4/5 flex justify-between items-center m-3 text-sm">
            <p>Smart Home Security</p>
            <p>92%</p>
          </div>
          <div className="w-4/5 rounded-md bg-gray-300 ">
            <div className=" bg-indigo-900 text-white p-0 text-right font-bold w-11/12">
            <p className="text-indigo-900 text-smm">  |  </p>
            </div>
          </div>
          <div className="w-4/5 flex justify-between items-center m-3 text-sm">
            <p>Cyber Security</p>
            <p>71%</p>
          </div>
          <div className="w-4/5 rounded-md bg-gray-300 ">
            <div className=" bg-indigo-900 text-white p-0 text-right font-bold w-9/12">
            <p className="text-indigo-900 text-smm">  |  </p>
            </div>
          </div>
          <div className="w-4/5 flex justify-between items-center m-3 text-sm">
            <p>Mobile App Security</p>
            <p>53%</p>
          </div>
          <div className="w-4/5 rounded-md bg-gray-300">
            <div className=" bg-indigo-900 text-white p-0 text-right font-bold w-1/2">
            <p className="text-indigo-900 text-smm">  |  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
