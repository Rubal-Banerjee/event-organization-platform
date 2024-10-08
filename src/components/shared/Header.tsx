import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return <header className="w-full border-b">
        <div className="wrapper flex justify-between items-center">
            <Link href='/' className="w-36">
                <Image src='/assets/images/logo.svg' width={128} height={38} alt="Evently logo" />
            </Link>

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
            </SignedIn>

            <div className="flex justify-end w-32 gap-3">
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <MobileNav />
                </SignedIn>
            </div>
        </div>
    </header>
}

export default Header