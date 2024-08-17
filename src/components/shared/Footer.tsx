import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return <footer className="border-t">
        <div className="flex-between flex-center wrapper flex flex-col sm:flex-row gap-4 p-5 text-center">
            <Link href="/">
                <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
            </Link>
            <p>Evently. All Rights Reserved.</p>
        </div>
    </footer>
}

export default Footer