const FigSection = () => {
  return (
    <section className="fig-section">
      <h2>The highest level of security</h2>
      <div className="figures">
        <div>
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0196e3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mouse-pointer"
            >
              <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              <path d="m13 13 6 6" />
            </svg>
          </figure>
          <h3>4 230 000</h3>
          <p>known viruses</p>
        </div>
        <div>
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0196e3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </figure>
          <h3>99.8%</h3>
          <p>viruses blocked</p>
        </div>
      </div>
      {/* 
      .fig-section {
  height: 30vh;
  padding: 1rem;
  background: #f2f3f7;
}

.fig-section > h2 {
  text-align: center;
  font-size: 2rem;
  color: #492e89;
}

.figures {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  margin-top: 3rem;
}

.figures > div {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 25vw;
  height: 25vh;
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 2rem;
}

.figures > div > h3 {
  font-size: 1.8rem;
  color: #492e89;
}
 */}
    </section> 
  );
};

export default FigSection;
