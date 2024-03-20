import {NavBar} from "@/app/components/NavBar";

export default function PageLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section className={"pt-2 sm:px-2 md:px-4 lg:px-8 bg-gradient-to-br from-black to-gray-500"}>
            <NavBar/>
            <hr className={"mt-2"}/>
            <div>{children}</div>
        </section>
    );
}
