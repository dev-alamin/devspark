import { Tooltip } from '@headlessui/react'

const badges = [
  { label: 'ShopSpark Plugin', icon: Zap, bg: 'bg-yellow-400', text: 'text-gray-900', url: '/projects/shopspark' },
  { label: 'Shalik Theme', icon: Box, bg: 'bg-pink-400', text: 'text-gray-900', url: '/projects/shalik-theme' },
  { label: 'LeetCode DSA', icon: Code, bg: 'bg-purple-400', text: 'text-gray-900', url: 'https://leetcode.com/dev-alamin/' },
  { label: 'Open Source', icon: GitPullRequest, bg: 'bg-green-400', text: 'text-gray-900', url: '/projects/open-source' },
  { label: 'CI/CD & DevOps', icon: ShieldCheck, bg: 'bg-blue-400', text: 'text-gray-900', url: '/projects/devops' },
]

export default function BadgeWithTooltip({ label, Icon, bg, text, url }) {
  return (
    <Tooltip>
      <Tooltip.Button as="a" href={url} target="_blank" rel="noopener noreferrer"
        className={`${bg} ${text} px-3 py-1 rounded-full font-semibold uppercase text-xs tracking-widest shadow-md flex items-center gap-1 hover:brightness-110 transition`}>
        <Icon className="w-4 h-4" />
        {label}
      </Tooltip.Button>
      <Tooltip.Panel className="absolute z-50 mt-2 w-max rounded bg-gray-800 p-2 text-sm text-white shadow-lg">
        Click to view details about {label}
      </Tooltip.Panel>
    </Tooltip>
  )
}
