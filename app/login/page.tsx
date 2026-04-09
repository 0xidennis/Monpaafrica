import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex text-[#0F172A] bg-[#F8FAFC]">
      {/* Left Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link href="/" className="logo mb-10 flex">
            <div className="logo-icon flex items-center justify-center bg-blue-600 rounded-lg w-8 h-8 shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5.5V12.5L9 16L15 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 2V16M3 5.5L15 12.5M15 5.5L3 12.5" stroke="#fff" strokeWidth="1" strokeOpacity=".5" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight ml-2">
              mon<span className="text-blue-600">pa</span>
            </span>
          </Link>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Please enter your details to sign in.
          </p>

          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#F8FAFC] text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <span className="sr-only">Sign in with Google</span>
                <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.25024 6.65L5.25524 9.75C6.20524 6.74 9.07528 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.4905 12.275C23.4905 11.41 23.4155 10.635 23.2755 9.875H12.0005V14.4H18.4555C18.1755 15.86 17.3305 17.09 16.1005 17.915V20.985H19.9605C22.2505 18.885 23.4905 15.875 23.4905 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.0004 24C15.2404 24 17.9604 22.925 19.9604 20.985L16.1004 17.915C15.0204 18.635 13.6204 19.075 12.0004 19.075C9.07041 19.075 6.20041 17.085 5.25041 14.075L1.24041 17.185C3.25041 21.145 7.31041 24 12.0004 24Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.25046 14.075C5.01046 13.355 4.88046 12.595 4.88046 11.825C4.88046 11.055 5.01046 10.295 5.25046 9.575L1.24046 6.465C0.450465 8.04 0.000465393 9.87 0.000465393 11.825C0.000465393 13.78 0.450465 15.61 1.25046 17.185L5.25046 14.075Z"
                    fill="#FBBC05"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right Side: Image/Design */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full bg-blue-600 object-cover rounded-l-3xl shadow-[-10px_0_30px_rgba(37,99,235,0.1)] flex flex-col justify-center items-center px-12 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 w-[150%] opacity-10">
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 0C620.914 0 800 179.086 800 400C800 620.914 620.914 800 400 800C179.086 800 0 620.914 0 400C0 179.086 179.086 0 400 0ZM400 160C267.452 160 160 267.452 160 400C160 532.548 267.452 640 400 640C532.548 640 640 532.548 640 400C640 267.452 532.548 160 400 160Z" fill="white"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-lg text-white">
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">Secure Escrow for the Modern Nigerian.</h3>
            <p className="text-xl text-blue-100 mb-12">Monpa holds your money safe until both parties are satisfied. No more scammers. No more lost payments.</p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-4">
                  <img className="w-10 h-10 border-2 border-blue-600 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face" alt="User 1" />
                  <img className="w-10 h-10 border-2 border-blue-600 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="User 2" />
                  <img className="w-10 h-10 border-2 border-blue-600 rounded-full" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face" alt="User 3" />
                </div>
                <div className="text-sm font-medium">Join 240,000+ Nigerians</div>
              </div>
              <div className="text-blue-100 text-sm">"Trading with Monpa has completely eliminated the stress of buying goods online from different states."</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
