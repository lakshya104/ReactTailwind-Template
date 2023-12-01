import jonas from "../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg";
import christopher from "../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import sergio from "../assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg";



const OurTeam = () => {
  return (
    <section className="flex items-center justify-center flex-col p-8" id="career">
      <h2 className="font-bold text-3xl text-indigo-900">Our Team</h2>
      <div className="flex items-center justify-center flex-wrap  gap-8">
        <div className="flex items-center justify-center flex-col p-12 shadow-2xl rounded-3xl gap-4">
          <figure className=" w-36 h-36" >
            <img className="w-full h-full rounded-full" src={jonas} alt="" />
          </figure>
          <h4 className=" text-indigo-900 font-bold text-xl">James Ford</h4>
          <h6 className="font-bold text-sm">General Director</h6>
        </div>
        <div className="flex items-center justify-center flex-col p-12 shadow-2xl rounded-3xl gap-4">
          <figure className=" w-36 h-36">
            <img className="w-full h-full rounded-full"
              src={sergio}
              alt=""
            />
          </figure >
          <h4 className=" text-indigo-900 font-bold text-xl">Ben Jason</h4>
          <h6 className="font-bold text-sm">Developer</h6>
        </div>
        <div className="flex items-center justify-center flex-col p-12 shadow-2xl rounded-3xl gap-4">
          <figure className=" w-36 h-36">
            <img className="w-full h-full rounded-full"
              src={christopher}
              alt=""
            />
          </figure>
          <h4 className=" text-indigo-900 font-bold text-xl">Ann Brown</h4>
          <h6 className="font-bold text-sm">Manager</h6>
        </div>
        
      </div>
    </section>
  );
};

export default OurTeam;
        