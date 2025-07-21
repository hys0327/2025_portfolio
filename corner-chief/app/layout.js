import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <div className="wrap">
                    <header className="flex items-center justify-between px-4 py-2 bg-white drop-shadow-sm">
                        <div className="left flex items-center gap-x-12">
                            <h1>
                                <Link href="/">
                                    <img
                                        src="/images/logo.svg"
                                        alt=""
                                        width={100}
                                    />
                                </Link>
                            </h1>
                            <ul className="menu-wrap">
                                <li>
                                    <Link href="./recipe/page">레시피</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="icon-wrap flex items-center gap-x-6">
                            <li>
                                <div className="icon icon-noti w-6"></div>
                            </li>
                            <li>
                                <div className="icon icon-login-fill w-6"></div>
                            </li>
                        </ul>
                    </header>
                    <main>{children}</main>
                    <footer></footer>
                </div>
            </body>
        </html>
    );
}
