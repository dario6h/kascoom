import Link from 'next/link';
import Image from 'next/image';

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="KASCOOM Logo"
        width={160}
        height={53}
        className="w-auto h-auto"
        priority
      />
    </Link>
  );
}
