"use client";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  return (
    <nav className="bg-white border-b border-[#9BBCF0] px-4 py-4 mt-4 mx-4 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              placeholder="Pesquisa"
              className="pl-10 bg-gray-50 border-gray-200 "
            />
          </div>
        </div>

        
          <div className="flex items-center gap-3">
            <div className="text-right ">
              <p className="text-sm font-bold text-[#2F59E0]">João Machava</p>
            </div>

            <Avatar className="w-7 h-7">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full border-gray-200"
              />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
          

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#2F91E0] hover:text-[#2FE0BE] rounded-lg">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
