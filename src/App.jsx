
import { useState } from 'react';
import ProductDetails from './component/ProductDetaills';
export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white">
        <h1 className="text-2xl font-bold">
          Notification
        </h1>

        <p className="mt-2 text-slate-400">
          Click the button to show or hide the message
        </p>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-500 transition"
        >
          {isVisible ? "Hide Message" : "Show Message"}
        </button>

        {isVisible && (
          <div className="mt-5 rounded-xl border border-emerald-800 bg-emerald-950/50 p-4 text-emerald-300">
            Your changes have been saved successfully.
          </div>
        )}
      </section>
      <ProductDetails/>
    </main>
  )

}
