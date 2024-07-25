import IMG1 from '../assets/images/bg.png'
import IMG2 from '../assets/images/noise.png'
import IMG3 from '../assets/images/arrow1.png'
// import Header from "../components/Header";

function Services(){
    return(
        <div className="Services">
            {/* <Header /> */}
            <img src={IMG2} alt="" className='bg-blue-500 rounded-lg w-[1290px] h-[777px] my-0 mx-auto mt-[100px]' />
            <div style={{backgroundImage: `url(${IMG1})`, borderRadius: '20px', width: "90vw", backgroundSize: "cover"}} className="master m-[100px] w-[1354px] h-[855.238px] rounded-[28px] mx-auto text-white">
                <p style={{fontFamily: "satoshi"}} className='pt-[100px] pl-[100px] font-bold text-[80px] w-[1055px] h-[520px] dark:text-white'>
                    Masters of Law in Every Dimension: Jurident, 
                    Your All-Inclusive Legal Services
                </p>
                <div className="scroll flex items-center top-[600px] left-[690px] relative max-md:flex-wrap" style={{ transform: 'rotate(90deg)' }}>
                    <img src={IMG3} alt="" style={{ transform: 'rotate(90deg)' }} />
                    <p style={{fontFamily: "poppins light"}} className='text-[24px]'>Scroll for more</p>
                </div>
            </div>
            <div className="organize w-[862px] font-bold ml-[100px] mb-[300px]">
                <p style={{fontFamily: "clash display"}} className='text-[80px]'>Stay Organized</p>
                <p className='text-[60px] font-medium'>
                    Ensure that your schedule is accurate by entering new appointments or events into our digital calendar.
                </p>
            </div>
            <div style={{backgroundImage: `url(${IMG1})`, borderRadius: '20px', width: "90vw", backgroundSize: "cover"}} className=" w-[1354px] h-[855.238px] rounded-[28px] mx-auto bg-no-repeat text-white">
                <div className="flex items-center justify-center">
                    <div className="ml-[400px] mt-[270px]">
                        <p style={{fontFamily: "clash display"}} className='text-[80px]'>Never Be Late</p>
                        <p className='text-[60px] font-medium w-[862px]'>
                            Our alarm system integrated within the app will notify you of any upcoming events.
                        </p>
                    </div>
                </div>
            </div>
            <div className="organize w-[926px] mt-[100px] font-bold ml-[100px] mb-[300px]">
                <p style={{fontFamily: "clash display"}} className='text-[80px]'>Everything in One Place</p>
                <p className='text-[60px] font-medium w-[862px]'>
                    Add your personal notes to 
                    any case you’d prefer
                </p>
            </div>
        </div>
    )
}

export default Services;