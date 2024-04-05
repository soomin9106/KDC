import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

const Introduction = () => {
    return (
        <div className="w-full h-screen bg-white text-black">
            <div className="container mx-auto px-16 py-8">
                <div className="flex flex-col space-y-10 sm:flex-row sm:space-y-0 sm:justify-between">
                    <div className="sm:w-[60%]">
                        <h2 className="text-6xl font-bold">Korea Dance Talent <br />  Vietnam 2024</h2>
                        <p className="mt-4 text-lg">Global Regionals - 2024 Coming soon </p>
                        <Button className="mt-4 bg-black text-white">Competition</Button>
                    </div>
                    <div className="sm:w-[40%]">
                        <div className="text-3xl font-semibold">Global Regionals</div>
                        <div className="flex flex-row space-x-10">
                            <ul className="mt-4 space-y-2">
                                <li>Vietnam</li>
                                <li>Korea</li>
                                <li>Japan</li>
                                <li>China</li>
                                <li>Hong Kong</li>
                            </ul>
                            <ul className="mt-4 space-y-2">
                                <li>Malaysia</li>
                                <li>Singapore</li>
                                <li>Indonesia</li>
                                <li>Philippines</li>
                                <li>More countries</li>
                            </ul>
                        </div>
                        <div className="mt-8 flex space-x-2">
                            <FacebookIcon className="h-6 w-6" />

                            <InstagramIcon className="h-6 w-6" />
                            <YoutubeIcon className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}


function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}

export default Introduction