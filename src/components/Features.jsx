import editing from "../assets/editing-photography-on-laptop.jpg"
import coding from "../assets/coding-on-laptop.jpg";
import laptop from "../assets/laptop-on-login-screen.jpg"

const Features = () => {
  return (
    <section className="flex justify-center flex-col items-center p-4 bg-sky-0 " id="features">
    <h2 className="text-3xl text-indigo-900 font-black mb-4 mt-2">Our Features</h2>
    <div className="flex justify-around gap-8 items-center flex-wrap">
      <div className="w-72 p-4 rounded-3xl shadow-xl flex justify-around flex-col gap-3 items-center pb-8">
        <img className="rounded-3xl" src={coding} alt="" />
        <h4 className="font-bold text-xl">Cyber Security</h4>
        <p className="text-xs text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          libero ipsa maiores consequatur in totam.
        </p>
        <a className="font-black text-cyan-500 text-sm" href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>

      <div className="w-72 p-4 rounded-3xl shadow-xl flex justify-around flex-col gap-3 items-center pb-8">
         <img className="rounded-3xl" src={editing} alt="" />
        <h4 className="font-bold text-xl">Smart Home Security</h4>
        <p className="text-xs text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          libero ipsa maiores consequatur in totam.
        </p>
        <a className="font-black text-cyan-500 text-sm" href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>

      <div className="w-72 p-4 rounded-3xl shadow-xl flex justify-around flex-col gap-3 items-center pb-8">
         <img className="rounded-3xl"  src={laptop} alt="" />
        <h4 className="font-bold text-xl">Mobile App Security</h4>
        <p className="text-xs text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          libero ipsa maiores consequatur in totam.
        </p>
        <a className="font-black text-cyan-500 text-sm" href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  </section>
  )
}

export default Features
