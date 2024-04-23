import heart from '../assets/svg-export/svgexport-3.svg';
import FooterLog from '../assets/svg-export/svgexport-85.svg';
import FooterName from '../assets/svg-export/svgexport-86.svg';
import youtube from '../assets/svg-export/svgexport-83.svg';
import Tiktok from '../assets/svg-export/svgexport-82.svg';
import Link from '../assets/svg-export/svgexport-81.svg';
import Twitter from '../assets/svg-export/svgexport-80.svg';
const Footer = () => {
    return (
        <>
            <div className='flex justify-between text-white mt-48 mx-14'>
                <div className='text-[48px] ml-12'>
                    <h1>The Fastest Email</h1>
                    <h1>Experience Ever Made</h1>
                </div>
                <div className='flex items-center mr-24'>
                    <div className='mx-6'>
                        <h3 className='font-semibold'>Legal</h3>
                        <ul className='mt-6 '>
                            <li className='mt-1'>Blog</li>
                            <li className='mt-1'>Careers</li>
                            <li className='mt-1'>
                                <div className="flex items-center">
                                    Love <img src={heart} alt="" className="ml-1 mt-2" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-6' style={{ marginTop: '-1rem' }}>
                        <h3 className='font-semibold'>Product</h3>
                        <ul className='mt-4'>
                            <li className='mt-1'>Pricing</li>
                            {/* <li className='mt-1'>Download</li> */}
                            <li className='mt-1'>AI</li>
                            <li className='mt-1'>Sales</li>
                            <li className='mt-1'>Enterprise</li>
                            <li className='mt-1'>Outlook</li>
                        </ul>
                    </div>

                    <div className='mx-6'>
                        <h3 className='font-semibold'>Support</h3>
                        <ul className='mt-6'>
                            <li className='mt-1'>Support</li>
                            <li className='mt-1'>Contact us</li>
                            <li className='mt-1'>Tutorials</li>
                        </ul>
                    </div>

                    <div className='mx-6'>
                        <h3 className='font-semibold'>Legal</h3>
                        <ul className='mt-6'>
                            <li className='mt-1'>Privacy</li>
                            <li className='mt-1'>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
          
            <div className=" mt-6 border-t border-gray-400"></div>
            <div className='flex justify-between'> 
               <div className='flex mt-12  ml-24 w-56 h-32'>
                <div className='w-6 h-full mr-6'><img src={FooterLog} alt=""  className='w-full h-auto' /></div>
                <div className='w-full h-full'><img src={FooterName} alt="" className='w-full h-auto' /></div>
               </div>

               <div className='flex'>
                <img className='mx-12 mb-24 mt-12'   src={Twitter} alt="" />
                <img className='mx-12 mb-24 mt-12' src={Link} />
                <img className='mx-12 mb-24 mt-12' src={Tiktok} alt="" />
                <img className='mx-12 mb-24 mt-12' src={youtube} alt="" />

               </div>
            </div>
        </>
    )
}

export default Footer;
