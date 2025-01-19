import Link from 'next/link';

import {Button} from "@/components/ui/button";





export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col justify-center items-center text-center bg-gradient-to-r  p-12">
            <h1 className="text-4xl font-extrabold  mb-6">Build Faster Than Ever :)</h1>
            <p className="text-lg  mb-8">
                Your one-stop destination for quick and seamless access to our documentation and resources.
            </p>
            <Link href="/docs">
                <Button >
                    Get Started
                </Button>
            </Link>
        </main>
    );
}
