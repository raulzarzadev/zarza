import Image from 'next/image'
import Link from 'next/link'
import TypescriptEffect from './TypescriptEffect'

const Hello = () => {
  return (
    <div className="grid place-content-center p-2">
      <div className="relative h-16 w-16 rotate-90">
        <Link href={'https://raulzarza.dev'}>
          <a target="_blank" rel="noreferrer">
            <Image
              src="/icon.png"
              layout="fill"
              objectFit="contain"
              alt="zarza-icon"
            />
          </a>
        </Link>
      </div>
      <h1 className="font-bold text-2xl sm:text-6xl ">
        <TypescriptEffect label="Hi! I'm Zarza " />
      </h1>
      <p>{`Yep! like blueberry (zarzamora)`}</p>

      <p className=" my-12 text-black text-lg max-w-lg mx-auto">{`I am a web developer, focused on creating accessible software for the world. I help accelerate the digital transition of companies and individuals to make their businesses more profitable and scalable. `}</p>
    </div>
  )
}

export default Hello
