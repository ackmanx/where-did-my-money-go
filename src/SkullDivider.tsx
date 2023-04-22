import SkullDividerImage from './skull-divider.png'

export const SkullDivider = () => (
  <div style={{ textAlign: 'center', margin: '16px 0' }}>
    <img src={SkullDividerImage} style={{ width: '14px' }} alt='divider' />
    <img src={SkullDividerImage} style={{ width: '14px' }} alt='divider' />
    <img src={SkullDividerImage} style={{ width: '14px' }} alt='divider' />
  </div>
)
