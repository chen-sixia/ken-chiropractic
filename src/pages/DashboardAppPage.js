import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import { AppCurrentVisits } from '../sections/@dashboard/app';

const storePhotos = [
  {
    img: '/assets/images/showcase/store0.jpg',
    title: 'store0',
  },
  {
    img: '/assets/images/showcase/store1.png',
    title: 'store1',
  },
  {
    img: '/assets/images/showcase/store2.png',
    title: 'store2',
  },
];

const customerPhotos = [
  {
    img: '/assets/images/showcase/men70.jpg',
    title: 'men70',
  },
  {
    img: '/assets/images/showcase/men70after.jpg',
    title: 'men70',
  },
];

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Top | Ken Chiropractic </title>
      </Helmet>

      <Container maxWidth="md">
        <Grid container spacing={5} columnSpacing={5}>
          <Grid item xs={12} md={6} lg={7}>
            <Card
              sx={{
                py: 5,
                boxShadow: 2,
                textAlign: 'left',
                paddingLeft: 5,
                paddingRight: 5,
                color: theme.palette.text,
                borderRadius: 5,
                // background: 'linear-gradient(to right bottom,theme.palette.primary.lighter,theme.palette.primary.main)',
              }}
            >
              <Typography variant="h3" sx={{ mb: 5 }}>
                健康は美しい姿勢から
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                あなたの健康をサポートします！
              </Typography>
              <Typography>
                こんな症状にお悩みの方 <br />
                身体のバランスを整え、痛みを和らげていきます！
              </Typography>
              <Typography variant="body1">
                <br />
                頭が痛い <br />
                手足がしびれる <br />
                腰が痛くて動きづらい <br />
                ヒザが痛くて歩きにくい <br />
                首や背中痛くて集中できない <br />
                四十肩や五十肩で腕が上がらない <br />
              </Typography>
              <Typography variant="body1">
                <br />
                肩こり、腰痛、 ギックリ腰 、 ストレートネック 、 猫背、 膝痛、 巻き肩、 しびれ、 反り腰、 全体の歪み ...
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppCurrentVisits
              title="患者様の年齢層"
              chartData={[
                { label: '30代以下', value: 1443 },
                { label: '40代', value: 4344 },
                { label: '50代', value: 4443 },
                { label: '60代以上', value: 5435 },
              ]}
              chartColors={[
                theme.palette.grey[300],
                theme.palette.grey[500],
                theme.palette.primary.lighter,
                theme.palette.primary.main,
              ]}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              お店の写真
            </Typography>
            <ImageList variant="masonry" cols={3} gap={20} sx={{ mb: 3 }}>
              {storePhotos.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>

            <Typography variant="h5" sx={{ mb: 5 }}>
              患者様の写真
            </Typography>
            <ImageList variant="masonry" cols={3} gap={20}>
              {customerPhotos.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
