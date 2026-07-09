"use client";

import {useState} from "react";
import {navigation} from "@/lib/constants/navigation";

export default function MobileNav(){
 const [open,setOpen]=useState(false);
 return <div className="md:hidden"><button onClick={()=>setOpen(!open)} className="rounded-full border border-white/20 px-4 py-2">{open?"Close":"Menu"}</button>{open&&<div className="mt-4 space-y-3">{navigation.map(item=><a className="block" key={item.href} href={item.href}>{item.name}</a>)}</div>}</div>;
}
