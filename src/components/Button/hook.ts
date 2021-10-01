import { ButtonProps } from 'components/Button'
import { ButtonPresenterProps } from 'components/Button/presenter'

type Params = ButtonProps

export const useButtonContainer = ({
  onClick,
  label,
}: Params): ButtonPresenterProps => {
  return {
    onClick,
    label,
  }
}
