const Testimonial = () =>{
    return(
        <div className="mt-24 ml-32 ">
            <div className="">
                <img className="w-[70px] h-[50px]" src="https://framerusercontent.com/images/9gOOXodO4dGLO6w5Bq3wSUZpmjo.png" alt="" />
            </div>
            <div className="mt-8 text-[70px] ">
                <h5 className="text-white text-[26px]">What customers are saying...</h5>
            </div>
            <h2 className="text-white text-left whitespace-pre-wrap font-semibold font-sans text-[48px] leading-16 font-adelle-sans mt-6">
      Spending less time on email means 
      <span className="bg-gray-700 text-white  font-sans">
        I can focus on </span>
        <br />
        <span className="font-sans"> meaningful work that moves the needle
      </span> 
       for our business. <br /> With Superhuman, 
      <span className="bg-gray-800 text-white font-sans">
        I have peace of mind that things are <br /> taken care of
      </span >. Email just isn't a hassle for me anymore.
    </h2>
        </div>
    )
}

export default Testimonial;