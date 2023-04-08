import Image from 'next/image';
import { useRouter } from 'next/router';
import img from '../../assets/Service/Artboard – 1 1.png'

const ServicesItem = () => {
    const router = useRouter();
    return (
        <div>
            <Image
                onClick={() => router.push('/service/[id]')}
                src={'https://i.ibb.co/Pjf1Nbh/Artboard-1-1-43d52c06.png'}
                alt="image"
                width={500}
                height={500}h
                className='w-full cursor-pointer'
            />

            <div className='mt-4 pr-3'>
                <div className='flex justify-between items-center border-l-4 pl-4 border-primary '>
                    <h1 
                     onClick={() => router.push('/service/[id]')}
                    className='font-medium cursor-pointer hover:text-primary duration-200'>Agency Website</h1>
                    <p className='text-sm text-neutral'>30$</p>
                </div>
                <p className='pl-4 mt-2 text-sm text-neutral leading-6'>Event madness we take are gathering  innovatEvent madness  on gathering innovators. <br /> It’s the freas bake <span className='text-primary'>more</span></p>
            </div>
        </div>
    );
};

export default ServicesItem;