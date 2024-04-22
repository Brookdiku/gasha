const page = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-md  rounded-lg shadow-lg p-8 mx-4 md:mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-red-500 text-center">Access Denied</h1>
        <p className="text-lg text-center mb-6">You are not authorized to access this page.</p>
        <a href="/" className="block w-full max-w-xs mx-auto bg-primary-one text-white text-center py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-primary-two focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Go Back Home</a>
      </div>
    </div>
  )
}
export default page;