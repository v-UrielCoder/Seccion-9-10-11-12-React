import { useCounter, useFetch } from '../hooks';
import { LoandingQuote, Quote } from '../03-examples';

export const Layput = () => {

  const { increment, counter } = useCounter(1);

  const { data, isLoading, hasError } =  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  const onNextQuote = () => {
    increment()
  }
  
  return (
    <>
      <h1>Breaking Bad Cuotes</h1>
      <hr />

      {
        isLoading
        ? <LoandingQuote />
        : <Quote author={author} quote={quote} />
      }
      
      <button disabled={isLoading} onClick={ onNextQuote } className='btn btn-primary'>Next Quote</button>

    </>
  )
}
