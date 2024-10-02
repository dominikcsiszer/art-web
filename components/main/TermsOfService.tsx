// components/TermsOfService.tsx

export default function TermsOfService() {
    return (
      <section className="text-gray-200 body-font">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">
            Terms of Service
          </h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-lg text-gray-300">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Modification of Terms
              </h2>
              <p className="text-lg text-gray-300">
                We reserve the right to modify these terms at any time. You should check this page regularly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Use of Service
              </h2>
              <p className="text-lg text-gray-300">
                You agree not to misuse the services provided by us.
              </p>
            </div>
            {/* Add more sections as needed */}
          </div>
        </div>
      </section>
    );
  }
  