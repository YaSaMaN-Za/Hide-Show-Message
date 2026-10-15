import { useState } from 'react';

export default function ProductDetails() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mx-auto my-10 max-w-md rounded-2xl border border-slate-200 bg-slate-800 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-blue-600">
                        Wearable Technology
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-500">
                        Smart Watch Pro X
                    </h2>

                    <p className="mt-2 text-2xl font-bold text-slate-500">
                        $ 249
                    </p>

                    <div className="mt-4 flex items-center justify-center rounded-xl bg-blue-100 p-6 text-6xl">
                        ⌚
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                        A stylish smartwatch designed to track your fitness,
                        monitor your heart rate, and keep you connected
                        throughout the day.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
                {isOpen ? 'Hide Details' : 'View Details'}
            </button>

            {isOpen && (
                <div className="mt-4 rounded-xl bg-slate-50 p-4 text-slate-700">
                    <p>
                        <strong>Battery Life:</strong> Up to 7 days
                    </p>

                    <p className="mt-2">
                        <strong>Display:</strong> 1.9-inch AMOLED
                    </p>

                    <p className="mt-2">
                        <strong>Connectivity:</strong> Bluetooth 5.3
                    </p>

                    <p className="mt-2">
                        <strong>Health Tracking:</strong> Heart rate and sleep
                    </p>

                    <p className="mt-2">
                        <strong>Warranty:</strong> 1 year
                    </p>
                </div>
            )}
        </div>
    );
}