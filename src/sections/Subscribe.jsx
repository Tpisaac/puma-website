import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-purple-500"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@puma.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <a
            href="https://uk.puma.com/uk/en/account/login?action=register"
            target="_blank"
          >
            <Button label="Sign up" fullWidth />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
