import Image from "next/image";

type Props={src:string;alt:string;className?:string};

export default function OptimizedImage({src,alt,className}:Props){
 return <Image src={src} alt={alt} width={1200} height={1200} className={className} />;
}
