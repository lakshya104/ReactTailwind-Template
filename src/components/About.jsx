import deskWorkspace from '../assets/office-wooden-desk-workspace.jpg'

const About = () => {
  return (
    <section className="flex items-center justify-center gap-12 p-20 flex-wrap" id="about">
    <div className="flex items-start justify-center flex-col gap-6 w-72">
      <h2 className=" text-4xl text-indigo-900 font-bold">About Cyber Security</h2>
      <p className="text-sm text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi rerum perferendis delectus sapiente similique
        doloribus harum labore laboriosam, maiores, amet ullam eos veritatis. Officiis illum temporibus quod facilis,
        eveniet hic quae quibusdam dignissimos delectus accusamus eaque iusto quisquam quos sapiente.</p>
      <button className="p-3" onClick="" name="ReadMore">Read More</button>
    </div>
    <div>
      <figure>
        <img className='w-72 rounded-3xl' src={deskWorkspace} alt="" />
      </figure>
    </div>
  </section>
)
}

export default About