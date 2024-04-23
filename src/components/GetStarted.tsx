import arrowicon from '../assets/svg-export/svgexport-12.svg'

const GetStarted = () => {
    return (
      <div className="mt-12 mx-8">
        <div className="bg-custom-purple">
          <img src="https://framerusercontent.com/images/6ZBl4oomcwqbObxzCSsjdjPGkQ.png" alt="" />
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-400 flex justify-between mx-24 text-center items-center mb-[-50px] rounded-lg">
          <div>
            <h1 className="text-[70px] font-semibold text-white font-sans p-3 mx-8">Get Started</h1>
          </div>
          <img src={arrowicon} className="text-center mx-4 font-bold w-24 h-24 mr-14" alt="" />
        </div>
      </div>
    );
}

export default GetStarted;
