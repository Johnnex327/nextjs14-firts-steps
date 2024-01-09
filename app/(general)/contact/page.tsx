import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['Contacto', 'Propietario']
};

export default function ContactPage() {
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}