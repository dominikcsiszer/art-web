// components/PrivacyPolicy.tsx

export default function PrivacyPolicy() {
    return (
      <section className="text-gray-200 body-font">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">
            Privacy Policy
          </h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-lg text-gray-300">
                Your privacy is important to us. This policy explains how we handle your personal information.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>
              <p className="text-lg text-gray-300">
                We collect information to provide better services to our users.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Information
              </h2>
              <p className="text-lg text-gray-300">
                The information we collect is used to improve your experience.
              </p>
            </div>
            {/* Add more sections as needed */}
          </div>
        </div>
      </section>
    );
  }
  