'use client';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { GithubIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center"></div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ variant: 'bordered', radius: 'full' })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
				<Button
					color="primary"
					onClick={async () =>
						await signIn('auth0', {
							callbackUrl: '/dashboard',
						})
					}
					variant="flat"
				>
					Login
				</Button>
			</div>
		</section>
	);
}
