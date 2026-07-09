type ButtonProps={children:React.ReactNode};

export default function Button({children}:ButtonProps){
 return <button className="px-6 py-3 bg-yellow-600 text-white rounded-full hover:opacity-90">{children}</button>;
}
