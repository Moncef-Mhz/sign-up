import hero from "./assets/1.jpg";
import svg from "./assets/Vector 1.svg";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <img
        src={hero}
        alt="#"
        className="w-full h-screen object-cover absolute -z-10"
      />
      <div className="h-screen w-full absolute -z-[9] bg-gradient-to-tr from-primary via-primary to-primary/80"></div>
      <div className="w-full h-full  flex items-center px-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-white/70">Start for free</h4>
          <h1 className="text-3xl text-white font-semibold">
            Create a new Account<span className="text-accents text-4xl">.</span>
          </h1>
          <div className="flex flex-col gap-5 ">
            <div className=" flex flex-row gap-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg gap-5 px-4 py-2 bg-secondary outline-none text-white/80"
              />
              <input
                type="text"
                placeholder="last Name"
                className="rounded-lg gap-5 px-4 py-2 bg-secondary outline-none text-white/80"
              />
            </div>
            <input
              type="email"
              placeholder="email"
              className="rounded-lg gap-5 px-4 py-2 bg-secondary outline-none text-white/80"
            />
            <input
              type="password"
              placeholder="password"
              className="rounded-lg gap-5 px-4 py-2 bg-secondary outline-none text-white/80"
            />
            <p className="text-white">
              Already have an account?
              <span className="text-accents ml-1 cursor-pointer">Sign In</span>
            </p>
            <button className="bg-accents rounded-lg py-2 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <img
        src={svg}
        alt=""
        className="-z-[8] absolute top-0 left-0 h-screen w-full"
      />
      <div className="absolute bottom-3 right-0">
        <h1 className="font-bold text-2xl text-white mr-10 ">
          Moon<span className="text-accents text-3xl">.</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
