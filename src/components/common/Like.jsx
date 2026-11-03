import { Button, Icon } from '@chakra-ui/react'
import { useState } from 'react'

const buttonStyles = {
  display: 'grid',
  placeContent: 'center',
  borderRadius: '50%',
  bgColor: 'white',
  marginRight: '10px',
  w: '40px',
  h: '40px',
}

function Like() {
  const [liked, setLiked] = useState(false)

  return (
    <Button
      sx={buttonStyles}
      aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
      onClick={() => setLiked((prevLiked) => !prevLiked)}
    >
      <Icon
        stroke={liked ? 'none' : 'black'}
        fill={liked ? 'red' : 'white'}
        width='32px'
        height='32px'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z'
          stroke='inherit'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Icon>
    </Button>
  )
}

export default Like
