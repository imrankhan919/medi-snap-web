import FileUpload from "./components/FileUpload"

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Upload Your Medicine Photo Here</h1>
        <p className="text-sm font-bold text-center mb-8">Get Most Detailed Info About Your Medines Here</p>
        <FileUpload />
      </div>
    </div>
  )
}


export default Home
