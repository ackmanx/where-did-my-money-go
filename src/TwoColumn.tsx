export const TwoColumn = ({ children }: any) => <div style={{ display: 'flex' }}>{children}</div>

export const TwoColumnLeft = ({
  children,
  isWide,
}: {
  children: React.ReactNode
  isWide?: boolean
}) => <div style={isWide ? { flexGrow: 1 } : { width: '50%' }}>{children}</div>

export const TwoColumnRight = ({ children }: any) => <div>{children}</div>
