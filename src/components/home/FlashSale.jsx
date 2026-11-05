import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionHeader from '../common/SectionHeader'
import GoodsCard from '../product/GoodsCard'
import CtaButtons from '../common/CtaButtons'

const ITEMS_TO_SHOW = 5
const MAX_ITEMS = 8

function FlashSale({
  allowNavigation = false,
  width,
  buttonContent,
  sectionTitle,
  additionalContent,
  badgeText,
  products,
  viewAllPath,
}) {
  const navigate = useNavigate()
  const [startIndex, setStartIndex] = useState(0)

  const handleViewAll = () => {
    if (viewAllPath) {
      navigate(viewAllPath)
    }
  }

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + ITEMS_TO_SHOW < products.length ? prevIndex + 1 : 0,
    )
  }

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : Math.max(products.length - ITEMS_TO_SHOW, 0),
    )
  }

  const visibleProducts = allowNavigation
    ? products.slice(startIndex, startIndex + ITEMS_TO_SHOW)
    : products.slice(0, MAX_ITEMS)

  const rightContent = allowNavigation ? (
    <>
      {additionalContent}
      <Box ml='auto'>
        <IconButton
          onClick={handlePrev}
          mr='10px'
          isRound
          aria-label='Previous products'
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleNext} isRound aria-label='Next products'>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  ) : (
    <Box ml='auto'>
      <CtaButtons
        width={width}
        buttonContent={buttonContent}
        onClick={handleViewAll}
      />
    </Box>
  )

  return (
    <Card boxShadow='none'>
      <CardHeader p='0'>
        <SectionHeader
          badgeText={badgeText}
          title={sectionTitle}
          rightContent={rightContent}
          stackOnMobile={allowNavigation}
        />
      </CardHeader>

      <CardBody mt={{ base: '30px', md: '50px' }} p='0'>
        <SimpleGrid
          w='100%'
          columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: allowNavigation ? ITEMS_TO_SHOW : 4 }}
          gridRowGap={{ base: '24px', md: '30px' }}
          gridColumnGap={{ base: '16px', sm: '24px', xl: allowNavigation ? '30px' : '65px' }}
        >
          {visibleProducts.map((product) => (
            <GoodsCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </CardBody>

      {allowNavigation && (
        <CardFooter justifyContent='center' p={{ base: '36px', md: '60px' }}>
          <CtaButtons
            width={{ base: '100%', sm: '234px' }}
            buttonContent='View All Products'
            onClick={handleViewAll}
          />
        </CardFooter>
      )}
    </Card>
  )
}

export default FlashSale
