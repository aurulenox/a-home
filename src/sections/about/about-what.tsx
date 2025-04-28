import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Iconify from '@components/iconify';
import Collapse from '@mui/material/Collapse';


import { useResponsive } from 'src/hooks/use-responsive';

import { fPercent } from 'src/utils/format-number';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import React from 'react';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [20, 40, 60][index],
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const lightMode = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
        {mdUp && (
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="accounting service"
                  src="/assets/images/about/accounting_1.jpg"
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="files"
                  src="/assets/images/about/accounting_2.jpg"
                  ratio="3/4"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}

        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Services
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            {/* <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
            >
              - Consulting
            </Typography> */}
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Service List
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <QuestionAnswerOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Consulting" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="홈페이지 구축" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GiteOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="도메인 호스팅" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BusinessOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="업무용 웹시스템" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CloudDoneOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="클라우드 서버" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AutoAwesomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="디지털 자동화" />
                  </ListItemButton>
                  
                </List>
              </Collapse>
            </List>

          </m.div>

          {/* <Stack spacing={3} sx={{ my: 5 }}>
            {SKILLS.map((progress, index) => (
              <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {progress.label}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fPercent(progress.value)}
                  </Typography>
                </Stack>

                <LinearProgress
                  color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                  variant="determinate"
                  value={progress.value}
                />
              </Box>
            ))}
          </Stack> */}

          {/* <m.div variants={varFade().inRight}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              Our Work
            </Button>
          </m.div> */}
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start" sx={{ mt: 3 }}>
        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Digital Solutions
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
            >
              <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-solutions"
              subheader={
                <ListSubheader component="div" id="nested-list-solutions">
                  Solution List
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <CheckCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Solutions" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="홈페이지" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AutoStoriesOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="General Ledger(GL) 총계정원장" />
                  </ListItemButton>
                  
                </List>
              </Collapse>
            </List>
            </Typography>
          </m.div>
        </Grid>
        {mdUp && (
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="task"
                  src="/assets/images/about/work_1.jpg"
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="software development"
                  src="/assets/images/about/dev_1.jpg"
                  ratio="3/4"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
    // </Box>
  );
}
