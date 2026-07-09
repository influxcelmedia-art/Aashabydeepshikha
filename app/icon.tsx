import { ImageResponse } from "next/og";

export const size={width:64,height:64};
export const contentType="image/png";

export default function Icon(){
 return new ImageResponse(
  <div style={{fontSize:32,background:"#0a0a0a",color:"#c9a227",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>A</div>
 );
}
