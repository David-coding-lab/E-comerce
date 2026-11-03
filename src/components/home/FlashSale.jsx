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
}) {
  const [startIndex, setStartIndex] = useState(0)

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
      <CtaButtons width={width} buttonContent={buttonContent} />
    </Box>
  )

  return (
    <Card boxShadow='none'>
      <CardHeader p='0'>
        <SectionHeader
          badgeText={badgeText}
          title={sectionTitle}
          rightContent={rightContent}
        />
      </CardHeader>

      <CardBody mt='50px' p='0'>
        <SimpleGrid
          w={allowNavigation ? '90vw' : 'auto'}
          columns={allowNavigation ? ITEMS_TO_SHOW : 4}
          gridRowGap='10px'
          gridColumnGap={allowNavigation ? '0' : '65px'}
        >
          {visibleProducts.map((product) => (
            <GoodsCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </CardBody>

      {allowNavigation && (
        <CardFooter justifyContent='center' p='60px'>
          <CtaButtons width='234px' buttonContent='View All Products' />
        </CardFooter>
      )}
    </Card>
  )
}

export default FlashSale
