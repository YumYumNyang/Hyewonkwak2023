"use client";

import React from "react";
import { ModeToggle } from "../toggle/mode-toggle";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../separator/separator";

const navLinks = [
	{ path: "/", title: "Home" },
	{ path: "/work", title: "Works" },
	{ path: "/article", title: "Articles" },
	{ path: "/record", title: "Records" },
] as { path: string; title: string }[];

const Header = () => {
	const pathname = usePathname() || "";
	return (
		<header className="sticky top-0 z-40 w-full border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
			<div className="container flex items-center h-14">
				<div className="hidden mr-4 md:flex">
					<a className="flex items-center mr-6 space-x-2" href="/">
						<span className="hidden font-bold sm:inline-block">
							Hyewon Kwak
						</span>
					</a>
					<nav className="flex items-center space-x-4 text-sm font-medium">
						{navLinks.map((link, index) => (
							<>
								<Link
									key={link.path}
									className={`transition-colors hover:text-foreground/80 text-foreground/${
										pathname === link.path ? 80 : 60
									}`}
									href={link.path}>
									{link.title}
								</Link>
								{index !== navLinks.length - 1 && (
									<Separator
										className="h-4"
										orientation="vertical"
									/>
								)}
							</>
						))}
					</nav>
				</div>
				<button
					className="inline-flex items-center justify-center px-0 py-2 mr-2 text-base font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
					type="button"
					aria-haspopup="dialog"
					aria-expanded="false"
					aria-controls="radix-:R15hja:"
					data-state="closed">
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5">
						<path
							d="M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"></path>
					</svg>
					<span className="sr-only">Toggle Menu</span>
				</button>
				<div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
					{/** search bar */}
					<nav className="flex items-center">
						<Button variant="ghost" size="icon">
							<Link
								target="_blank"
								rel="noreferrer"
								href="https://github.com/YumYumNyang">
								<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] fill-current" />
								<span className="sr-only">GitHub</span>
							</Link>
						</Button>
						<Button variant="ghost" size="icon">
							<Link
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/theonlyone_hye1">
								<InstagramLogoIcon className="h-[1.2rem] w-[1.2rem] fill-current" />
								<span className="sr-only">Instagram</span>
							</Link>
						</Button>
						<ModeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
