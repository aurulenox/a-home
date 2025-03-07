import { m, MotionProps } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <Box
      sx={{
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
          'url(/assets/images/about/hero.jpg)',
          /* 'url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)', */
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: {
              xs: 'center',
              md: 'unset',
            },
          }}
        >
          {/* <TextAnimate text="Who" variants={varFade().inRight} sx={{ color: 'primary.main' }} />

          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
            <TextAnimate text="am" />
            <TextAnimate text="I?" />
          </Stack> */}

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              흥미로운 소프트웨어 개발로 세상을 탐구합니다.
              <br /> 상상하는 모든 것을 구현합니다.
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TextAnimateProps = BoxProps &
  MotionProps & {
    text: string;
  };

function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
