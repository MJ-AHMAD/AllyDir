export function OpenSourceBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M16 18 22 12 16 6"></path>
            <path d="M8 6 2 12 8 18"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
          <span>Open Source Innovation Hub - Join the Knowledge Revolution</span>
          <a href="https://github.com/MJ-AHMAD" className="underline ml-2 hover:text-blue-100">
            Contribute on GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
