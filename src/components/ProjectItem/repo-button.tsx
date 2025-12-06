import { GithubLogoIcon } from '@phosphor-icons/react'
import Link from 'next/link'


interface RepoButtonProps {
  to: string
}

export function RepoButton({ to }: RepoButtonProps) {
  return (
    <Link
      href={to}
      target="_blank"
      className="relative inline-flex items-center gap-3 px-4 backdrop-blur-sm rounded-full border border-slate-700/50 shadow-2xl active:scale-95 bg-slate-950/10 hover:bg-slate-950/30 cursor-pointer h-9"
    >
      <GithubLogoIcon className="h-4 w-4" weight="fill" />
      <span className="text-white font-medium tracking-wider select-none text-sm">
        Repositório
      </span>
    </Link>
  )
}