import Link from 'next/link';

export default function SignUpLink() {
    return (
<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-4">
    New to TeleStore? <Link className="text-blue-500" href="/signup">Sign up here.</Link>
</div>
    )
}