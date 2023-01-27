import { Helmet } from 'react-helmet-async';
import { Container, Card, CardContent, Grid, Typography } from '@mui/material';
import SportsHandballTwoToneIcon from '@mui/icons-material/SportsHandballTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

export default function MoneyPage() {
  return (
    <>
      <Helmet>
        <title> Money | Ken Chiropractic </title>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ mb: 5 }}>
          基本メニュー
        </Typography>
        <Grid container rowSpacing={5}>
          <Grid item xs={12} md={10} lg={10}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  30分
                </Typography>
                <Typography variant="h5" component="div">
                  <SportsHandballTwoToneIcon /> マッサージ ＋ 1箇所矯正
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  施術料 3,000円 <br />
                  <Typography variant="caption" sx={{ mb: 1.5 }} color="text.secondary">
                    ※ 矯正はなくても対応します
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  60分
                </Typography>
                <Typography variant="h5" component="div">
                  <SportsHandballTwoToneIcon /> 体の歪みや痛みを和らげる
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  施術料 7,000円
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  利用可能期間: 3ヶ月間
                </Typography>
                <Typography variant="h5" component="div">
                  <SportsHandballTwoToneIcon /> 回数券
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  3回 18,000円
                  <br />
                  5回 30,000円
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Typography variant="caption">
              <InfoTwoToneIcon />
              <br />
              骨盤調整は全てのメニューに、基本の施術内容として含まれています。 <br />
              お客様の身体の状態に合わせ、必要な場合には頭部マッサージも行いますが、プラスでの料金はかかりません。
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
