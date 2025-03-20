import "./HomePageText.scss";

const HomePageText = () => {
  return (
    <div>
      <div className="homepage__text">
        <h2 className="homepage__title">Welcome to Pour Decisions 🍸</h2>
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

        <h4>How It Works</h4>
        <p>
          ✅ Find Deals Instantly – Browse happy hour specials by neighbourhood,
          time, and date
        </p>
        <p>
          ✅ Save Time & Money – No more endless Google searches or overpaying
          for drinks 💰
        </p>
        <p>
          ✅ Unbiased Reviews – Read and leave reviews on drinks, food,
          atmosphere, and experience
        </p>
        <p>
          ✅ Drink First, Think Later – Just open our site and let the deals
          come to you! 🍸
        </p>
        <h4>Why Pour Decisions?</h4>
        <p>
          With the cost of living on the rise, every dollar counts. We believe
          affordable drinks and good times should be easy to find. Whether
          you're a cocktail connoisseur, beer enthusiast, or foodie looking for
          the best bites, we make happy hour hunting effortless.
        </p>
        <p>
          💡 Stop Googling, start drinking – discover Toronto’s best happy hour
          deals today!
        </p>
      </div>
      <img
        className="skyline__image"
        src="/src/assets/images/homepage-skyline-pd.svg"
        alt="skyline of Toronto cartoon"
      ></img>
    </div>
  );
};
export default HomePageText;
