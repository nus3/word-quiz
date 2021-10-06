import { FC, ReactNode } from 'react'

import { useLayoutContainer } from 'components/Layout/hook'
import { LayoutPresenter } from 'components/Layout/presenter'

export type LayoutProps = {
  children: ReactNode
  loading?: boolean
}

export const Layout: FC<LayoutProps> = ({ children, loading }) => {
  const props = useLayoutContainer({ children, loading })
  return <LayoutPresenter {...props} />
}
