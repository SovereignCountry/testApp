import * as React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Typography, Card, CardContent, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
import custom_values from '../custom_values';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships. Hellow some text doll asd",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 3,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
];

const StyledButton = styled('button')({
  backgroundColor: custom_values.colors.green_0,
  color: custom_values.colors.contrastText,
  borderWidth: '2px',
  borderColor: custom_values.colors.green_1,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '22px',
  '&:hover': {
    backgroundColor: custom_values.colors.green_0,
  },
});

const StarRating = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const Star = styled('span')({
  color: '#FFD700', // Gold color
  fontSize: '1.2rem',
  marginRight: '0.2rem',
});

const SliderCustom: React.FC = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          paddingBottom: '20px',
          color: custom_values.colors.contrastText,
          fontSize: {
            xs: '24px',
            sm: '32px',
          },
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        Testimonials
      </Typography>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={150}
        totalSlides={testimonials.length}
        visibleSlides={3}
        infinite
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          <StyledButton>
            <ButtonBack>
              <ArrowBackIosNewIcon />
            </ButtonBack>
          </StyledButton>

          <Box sx={{ flex: '1', maxWidth: custom_values.container_login }}>
            <Slider>
              {testimonials.map((testimonial, index) => (
                <Slide index={index} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      margin: '0px 10px',
                      padding: '30px 20px',
                      textAlign: 'center',
                      borderRadius: '20px',
                      backgroundColor: custom_values.colors.g_1,
                      boxShadow: 'none',
                      gap: '10px',
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 70, height: 70, margin: '0 auto' }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: '700',
                        color: custom_values.colors.contrastText,
                        fontSize: {
                          xs: '16px',
                          md: '18px',
                        },
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <StarRating>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i}>★</Star>
                      ))}
                    </StarRating>
                    <Typography
                      variant="body2"
                      sx={{
                        color: custom_values.colors.g_2,
                        fontSize: {
                          xs: '14px',
                          md: '16px',
                        },
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 8,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {testimonial.text}
                    </Typography>
                  </Card>
                </Slide>
              ))}
            </Slider>
          </Box>

          <StyledButton>
            <ButtonNext>
              <ArrowForwardIos />
            </ButtonNext>
          </StyledButton>
        </Box>
      </CarouselProvider>
    </Container>
  );
};

export default SliderCustom;