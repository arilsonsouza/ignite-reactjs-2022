import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionBtn } from './styles'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false)

  function handleTransactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <NewTransactionBtn>Nova transação</NewTransactionBtn>
          </Dialog.Trigger>

          <NewTransactionModal
            handleTransactionModalOpenChange={setIsTransactionModalOpen}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
