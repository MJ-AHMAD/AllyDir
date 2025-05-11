export default function LicensePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">License</h1>

      <div className="prose prose-blue max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">MIT License</h2>

          <p className="mb-4">Copyright (c) 2024 MJ AHMAD</p>

          <p className="mb-4">
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
            documentation files (the "Software"), to deal in the Software without restriction, including without
            limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
            the Software, and to permit persons to whom the Software is furnished to do so, subject to the following
            conditions:
          </p>

          <p className="mb-4">
            The above copyright notice and this permission notice shall be included in all copies or substantial
            portions of the Software.
          </p>

          <p className="mb-4">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
            EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
            AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
            OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Third-Party Licenses</h2>

        <p className="mb-6">This project includes the following third-party open source software components:</p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Next.js</h3>
            <p className="text-sm text-gray-600 mb-2">The MIT License (MIT)</p>
            <p className="mb-2">Copyright (c) 2024 Vercel, Inc.</p>
            <a
              href="https://github.com/vercel/next.js/blob/canary/LICENSE"
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View License
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">React</h3>
            <p className="text-sm text-gray-600 mb-2">The MIT License (MIT)</p>
            <p className="mb-2">Copyright (c) Meta Platforms, Inc. and affiliates.</p>
            <a
              href="https://github.com/facebook/react/blob/main/LICENSE"
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View License
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600 mb-2">The MIT License (MIT)</p>
            <p className="mb-2">Copyright (c) Tailwind Labs, Inc.</p>
            <a
              href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View License
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">License FAQ</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I use this project commercially?</h3>
            <p>Yes, the MIT license allows commercial use.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Do I need to include the license in my project?</h3>
            <p>
              Yes, you must include the original MIT license and copyright notice in any copy of the software/source.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Can I modify the code?</h3>
            <p>Yes, the MIT license allows modification.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Can I distribute the code?</h3>
            <p>Yes, you can distribute the original or modified code.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
