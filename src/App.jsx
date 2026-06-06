import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
        <h1 className="text-3xl font-bold mb-4">
          Counter App
        </h1>

        <p className="text-5xl font-bold text-blue-600 mb-4">
          {count}
        </p>

        {count === 0 && (
          <p className="text-red-500 text-sm mb-4">
            Minimum limit reached
          </p>
        )}

        <div className="flex justify-center gap-3">
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            +
          </button>

          <button
            onClick={decrement}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            -
          </button>

          <button
            onClick={reset}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;