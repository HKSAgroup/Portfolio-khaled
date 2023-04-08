import Image from 'next/image';
import img from '../../src/assets/brandLogo-removebg-preview.png'
import copyright from '../../src/assets/images/footer/copyright.png'

const Footers = () => {

  return (
    <>
      <div className="bg-accent mt-10">
        <div className="mid-container">
          <footer className="footer sm: pt-10  lg:pb-32 md:pb-28 sm:pb-16 pb-8 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-10">
            <div>
              <d iv className='flex items-center gap-2'>
                <Image
                  src={img}
                  alt="Picture of the author"
                  width={150}
                  height={120}
                />
                {/* <h1 className='font-semibold text-2xl'>Portfolio</h1> */}
              </d>
              <p className='text-justify text-sm text-neutral'>Professional designer developer and marketer. Working more then 2 thousand clients Globally. Main target provide best level services for business owner.</p>
              <div className="grid grid-flow-col gap-4 mt-2 text-info">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer hover:text-primary duration-200"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer hover:text-primary duration-200"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer hover:text-primary duration-200"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              </div>
            </div>

            <div>
              <span className="uppercase text-info font-semibold">Usefull Links</span>
              <a className="link link-hover text-neutral">Home</a>
              <a className="link link-hover text-neutral">Service</a>
              <a className="link link-hover text-neutral">About Us</a>
              <a className="link link-hover text-neutral">Project</a>
            </div>
            <div>
              <span className="uppercase text-info font-semibold">Support</span>
              <a className="link link-hover text-neutral">Contact</a>
              <a className="link link-hover text-neutral">About</a>
              <a className="link link-hover text-neutral">FAQs</a>
              <a className="link link-hover text-neutral">Forms</a>
            </div>
            <div>
              <span className="uppercase text-info font-semibold">More</span>
              <a className="link link-hover text-neutral">Terms of use</a>
              <a className="link link-hover text-neutral">Privacy policy</a>
              <a className="link link-hover text-neutral">Cookie policy</a>
            </div>
            <div>
              <span className="uppercase text-info font-semibold">Contact With Us</span>
              <a className="link link-hover text-neutral">+8801722-570947</a>
              <a className="link link-hover text-neutral">hello@khaledfullstack.com</a>
              <a className="link link-hover text-neutral">Dhaka Bangladesh</a>
            </div>
          </footer>

          <footer className="footer py-5 border-t border-primary">
            <div className="flex justify-center mx-auto items-center">
              <Image
                src={copyright}
                alt="copyright image"
                width={20}
                height={20}
              />
              <p>Copyright by Khaled Hasan </p>
            </div>

          </footer>
        </div>
      </div>
    </>
  );
};

export default Footers;
