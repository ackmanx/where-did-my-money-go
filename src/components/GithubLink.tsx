function generateGithubLink(bank: string) {
  return `https://github.com/search?q=repo%3Aackmanx%2Fackmanx.github.io+${encodeURI(
    bank
  )}&type=code`
}

export const GithubLink = ({
  searchTerm,
  children,
}: {
  searchTerm: string
  children: React.ReactNode
}) => (
  <a href={generateGithubLink(searchTerm)} style={{ textDecoration: 'none' }} target='_blank'>
    {children}
  </a>
)
