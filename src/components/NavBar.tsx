import Image from "next/image"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">

        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image 
              src='/search.png' 
              alt='search' 
              width={18} 
              height={18} 
              className="text-gray-400"
            />
          </div>
          <input 
            type="text" 
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-gray-800 placeholder-gray-400" 
            placeholder="Search..."
          />
        </div>

        <div className="flex gap-4 items-center">
            <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
                <Image src='/message.png' alt="" width={20} height={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer relative">
                <Image src='/announcement.png' alt="" width={20} height={20} />
                <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-white text-xs">12</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs leading-3 font-medium">Nathe</span>
              <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>

            <Image src='/avatar.png' alt="profile" width={36} height={36} className="rounded-full" />
        </div>
    </div>
  )
}

export default NavBar