import "./HomePageText.scss";

const HomePageText = () => {
  return (
    <div>
      <div className="homepage__text">
        <h2 className="homepage__title">Welcome to Pour Decisions</h2>
        <section className="homepage__text-container">
        <h3>Drink First, Think Later</h3>
        <p>Your Guide to the Best Happy Hour Deals in Toronto!</p>
        <p>
          Why spend hours searching for the best happy hour specials when you
          can find them all in one place? Pour Decisions is your go-to web app
          for discovering the best drink and food deals in downtown Toronto –
          all based on your location, date, and time of day. Whether you're
          looking for an afternoon pint, evening cocktails, or late-night bites,
          we've got you covered! 🍻🍹
        </p>
        </section>

        <video width="100%" height="auto" autoPlay loop muted playsInline>
        <source src="src/assets/images/Homepage-video-PD.mp4" type="video/mp4" />
      </video>
        <section className="homepage__text-container">
        <h3>Why Pour Decisions?</h3>
        <p>
          With the cost of living on the rise, every dollar counts. We believe
          affordable drinks and good times should be easy to find. Whether
          you're a cocktail connoisseur, beer enthusiast, or foodie looking for
          the best bites, we make happy hour hunting effortless.
        </p>
        <p>
          Stop Googling, start drinking – discover Toronto’s best happy hour
          deals today!
        </p>
        </section>
      </div>
    </div>
  );
};
export default HomePageText;
