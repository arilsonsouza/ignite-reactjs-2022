import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { MagnifyingGlass } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SearchFormContainer } from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

/**
 * Por que um componente renderiza?
 * - Hooks changed (mudou estado, contexto, reducer)
 * - Props changed (mudou propriedades)
 * - Parent rerendered (componente pai renderizou)
 *
 * Qual o fluxo de renderização?
 * 1. O React recria o HTML da interface do componente
 * 2. Compara a versão do HTML recriada com a versão anterior
 * 3. SE mudou algo, ele reescreve o HTML na tela
 *
 * Memo:
 * 0. Hooks changed, Props changed (deep comparison)
 * 0.1 Compara a versão anterior dos hooks e props
 * 0.2 SE mudou algo, ele permitirá a nova renderização
 */

function SearchFormComponent() {
  const fetchTransactions  = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass /> Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
