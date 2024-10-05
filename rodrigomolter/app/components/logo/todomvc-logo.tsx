import Image from "next/image"

export default function TodoMVCLogo() {
  return (
    <div className="overflow-hidden w-full h-full flex items-center justify-center bg-white rounded-full p-1">
      <Image
        src="/projects/todo-mvc/todo-mvc-logo.svg"
        alt="TodoMVC Logo"
        width={1080}
        height={1080}
      />
    </div>
  )
}
