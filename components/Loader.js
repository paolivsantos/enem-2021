export default function Loader() {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-screen h-screen z-50 fixed top-0 left-0 right-0 bottom-0">
      <div 
        style={{ borderTopColor: 'transparent' }} 
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin">
      </div>
    </div>
  )
}