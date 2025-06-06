import TeleStoreLogo from '@/app/ui/telestore-logo';
import SignUpForm from '@/app/ui/signup-form';
import LoginLink from '@/app/ui/login-link';
 
export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3">
          <div className="w-50 text-white md:w-60">
            <TeleStoreLogo />
          </div>
        </div>
        <SignUpForm />
        <LoginLink />
      </div>
    </main>
  );
}