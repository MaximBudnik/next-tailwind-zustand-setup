import Link from 'next/link';


export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-bold text-gray-800">Hello, World!</h1>
                <Link href="/data">
                    <p className="mt-4 text-blue-500 hover:text-blue-600 cursor-pointer">
                        Go to /data
                    </p>
                </Link>

            </div>
        </div>
    )
}
