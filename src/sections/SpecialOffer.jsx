import puman from "../assets/images/sh6.png";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={puman}
          width={300}
          className="rounded-md object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-purple-500 "> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. from premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a relam of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link to="/puma-website/shop">
            <Button label="Shop now" iconURL={arrowRight} />
          </Link>
          <a
            href="https://uk.puma.com/uk/en/collections/select/fenty-x-puma"
            target="_blank"
          >
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
