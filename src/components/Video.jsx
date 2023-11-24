

const Video = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-8 m-10">
    <h2 className="font-bold text-indigo-900 text-3xl">
      Watch Video
    </h2>
    <div className="flex items-center justify-center">
      <iframe className=" rounded-3xl w-[50vw]  sm:w-[70vw]" width="700" height="350" src="https://www.youtube.com/embed/inWWhr5tnEA?si=zTFBVCy8XL9w0yVX"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </section>

  )
}

export default Video