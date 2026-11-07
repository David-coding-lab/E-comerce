import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import ProductListing from '../components/common/ProductListing'
import { searchProducts } from '../data/products'

function Search() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('q') ?? '').trim()
  const results = searchProducts(query)

  return (
    <Box pb={{ base: '60px', md: '80px' }}>
      <ProductListing
        title={query ? `Results for “${query}”` : 'Search Products'}
        products={results}
        showNewArrival={false}
        emptyTitle={query ? `No results for “${query}”` : 'Start searching'}
        emptyDescription={
          query
            ? 'Try a different keyword or browse our categories.'
            : 'Search for products by name or category.'
        }
      />
    </Box>
  )
}

export default Search
