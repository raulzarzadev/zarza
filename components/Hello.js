import Image from "next/image"
import TypescriptEffect from "./TypescriptEffect"

const Hello = () => {
    return (
      <div className='grid place-content-center'>
        <div className='relative h-16 w-16 rotate-90'>
          <Image src='/icon.png' layout='fill' objectFit='contain' alt="zarza-icon"/>
        </div>
        <h1 className='font-bold text-2xl'>
          <TypescriptEffect label="Hi! I'm Zarza " />
        </h1>
        <p>
          {`I'm web developer`}
        </p>
      </div>
    )
  }
  
export default Hello