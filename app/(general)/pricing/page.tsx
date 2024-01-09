import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['pricing', 'precios', 'ofertas']
};


export default function pricingPage(){
    return (
        <>
            <span className="text-7xl"> Pricing Page</span>
        </>
    )
}