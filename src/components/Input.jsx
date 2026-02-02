import { useRef } from "react"

function TextTransform() {
  const inputRef = useRef(null)

  const toUppercase = () => {
    inputRef.current.value =
      inputRef.current.value.toUpperCase()
  }

  const toLowercase = () => {
    inputRef.current.value =
      inputRef.current.value.toLowerCase()
  }

  return (
    <div className="flex flex-col gap-4 items-center mt-10">
      <input
        ref={inputRef}
        type="text"
        placeholder="Écris un texte..."
        className="border px-4 py-2 rounded"
      />

      <div className="flex gap-4">
        <button
          onClick={toUppercase}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Majuscules
        </button>

        <button
          onClick={toLowercase}
          className="bg-gray-400 px-4 py-2 rounded"
        >
          Minuscules
        </button>
      </div>
    </div>
  )
}

export default TextTransform
