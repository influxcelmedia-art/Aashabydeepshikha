import Logo from "@/components/ui/Logo";
import { navigation } from "@/lib/constants/navigation";

export default function Navbar(){
 return <header className="border-b border-white/10 px-6 py-5"><nav className="flex items-center justify-between"><Logo/><div className="hidden md:flex gap-6">{navigation.map(item=><a key={item.href} href={item.href}>{item.name}</a>)}</div></nav></header>;
}
