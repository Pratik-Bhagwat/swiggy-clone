import Navbar from "./Components/Navbar";
import CustomCarousel from "./Components/CustomCarousel";
import { offerBannerData, otherFoodData, cardData } from "./constants";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <header className="py-4 px-2 border-b-0 shadow-md">
        <Navbar />
      </header>
      <main>
        <section className="container max-w-[425px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1150px] mt-6">
          <CustomCarousel title="Best offer's for you">
            {offerBannerData.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                className={item.className}
              />
            ))}
          </CustomCarousel>
          <CustomCarousel title="What's on your mind?">
            {otherFoodData.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                className={item.className}
              />
            ))}
          </CustomCarousel>
        </section>
        <section className="container max-w-[425px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1150px] mt-6">
          <CustomCarousel title="Top Restaurant chains in Pune">
            <div className="flex items-center gap-7">
              {cardData.map((data) => (
                <div key={data.id} className="w-[300px]">
                  <Card
                    title={data.title}
                    src={data.src}
                    location={data.location}
                    rating={data.rating}
                    menu={data.menu}
                  />
                </div>
              ))}
            </div>
          </CustomCarousel>
        </section>
      </main>
    </>
  );
}
export default App;
