import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import SvgColor from '@components/svg-color';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Aurulenox',
    children: [
      { name: 'About', href: paths.about },
      { name: 'Notice', href: paths.post.root },
      // { name: 'License', href: paths.license.root },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'sales@aurulenox.com', href: '#' }],
  },
];

const currentYear = new Date().getFullYear();

// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();

  const mdUp = useResponsive('up', 'md');

  const footerTypographyVariant = mdUp ? "body2" : "caption";

  const homePage = pathname === '/';

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        {/* <Logo sx={{ mb: 1, mx: 'auto' }} /> */}

        <Typography variant="caption" component="div">
          아울레녹스 유한책임회사 | 대표자: 윤종현 | 서울특별시 용산구 이촌로64길 15 | Email: sales@aurulenox.com | Tel: 010-5969-9992
          <br />
          © {currentYear} Aurulenox and its related entities. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        {/* <Logo sx={{ mb: 3 }} /> */}
        {mdUp &&
          <Grid
            container
            justifyContent={{
              xs: 'center',
              md: 'space-between',
            }}
          >
            <Grid xs={8} md={3}>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: 270,
                  mx: { xs: 'auto', md: 'unset' },
                }}
              >
                아우룰레녹스(A.nox*) 홈페이지입니다.
              </Typography>

              {/* Social Media Icon LINK */}
              {/* <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                  target="_blank"
                  rel="noopener"
                  href={social.path}
                >
                  <SvgColor color={social.color} src={social.src} sx={{ width: social.name === 'Naver' ? '16px !important;' : '24px', height: social.name === 'Naver' ? '16px !important;' : '24px' }} />
                </IconButton>
              ))}
            </Stack> */}
            </Grid>

            <Grid xs={12} md={6}>
              <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
                {LINKS.map((list) => (
                  <Stack
                    key={list.headline}
                    spacing={2}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    sx={{ width: 1 }}
                  >
                    <Typography component="div" variant="overline">
                      {list.headline}
                    </Typography>

                    {list.children.map((link) => (
                      <Link
                        key={link.name}
                        component={RouterLink}
                        href={link.href}
                        color="inherit"
                        variant="body2"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        }

        <Typography variant={footerTypographyVariant} sx={{ mt: 10 }}>
          아울레녹스 유한책임회사 | 대표자: 윤종현 | 서울특별시 용산구 이촌로64길 15 | Email: sales@aurulenox.com | Tel: 010-5969-9992
          <br />
          © {currentYear} Aurulenox and its related entities. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );

  return homePage ? simpleFooter : mainFooter;
}
