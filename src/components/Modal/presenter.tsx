import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import { Button } from 'components/Button'

// NOTE: transitionのアニメーションがcss moduleでかくと変になるのでそのままclassNameのtailwindのclassを記載している
import styles from './styles.module.css'

export type ModalPresenterProps = {
  open: boolean
  onCloseModal: () => void
  collect: boolean
  answerText: string
}

export const ModalPresenter: FC<ModalPresenterProps> = ({
  open,
  onCloseModal,
  collect,
  answerText,
}: ModalPresenterProps) => {
  return (
    // HACK:(nus3) modalとmodalのcontentでコンポーネント分ける
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onCloseModal}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={styles.overlay} />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-hidden transition-all transform bg-white shadow-xl rounded-md">
              <div className={styles.content}>
                <p className={styles.text}>{collect ? '正解' : '不正解'}</p>
                <p className={styles.answer}>
                  <span className="font-normal text-sm">解答例：</span>
                  <span className="ml-3">{answerText}</span>
                </p>
                <Button onClick={onCloseModal} label="次へ" />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
