export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-700 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/terms-of-service"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-gray-100 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-gray-100 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-gray-100 font-semibold"
              >
                Account Deletion
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-300 transition-colors duration-300 hover:text-gray-100 font-semibold tracking-tight"
            >
              © {new Date().getFullYear()} WeArt — All rights reserved.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
