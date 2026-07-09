import Container from "@/components/layout/Container";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export default function Checkout(){
 return <main><Container><section className="py-20"><h1 className="text-5xl font-bold mb-8">Checkout</h1><CheckoutForm/></section></Container></main>;
}
