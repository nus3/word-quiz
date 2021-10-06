import { LayoutProps } from 'components/Layout'
import { LayoutPresenterProps } from 'components/Layout/presenter'

type Params = LayoutProps

export const useLayoutContainer = ({
  children,
  loading,
}: Params): LayoutPresenterProps => {
  return {
    children,
    loading,
  }
}
