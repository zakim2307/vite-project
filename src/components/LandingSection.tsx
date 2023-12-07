import zakiImage from '/zaki.jpg'

const greeting = 'Hello, I am Zaki!'
const bio1 =
  'A frontend developer and designer. I am also passionate about code and UI'
const bio2 = 'specialised in React'

function LandingSection() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-8 ">
      <img
        className="object-cover my-16 w-64 h-96 rounded-full"
        src={zakiImage}
        alt="Zaki Mulla"
      />
      <h1 className="my-4 text-5xl font-serif">{greeting}</h1>
      <p className="text-xl">{bio1}</p>
      <p className="text-xl">{bio2}</p>
    </div>
  )
}

export default LandingSection