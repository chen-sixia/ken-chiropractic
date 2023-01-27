import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { Container } from '@mui/system';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';

export default function InfoPage() {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Introduction | Ken Chiropractic </title>
      </Helmet>
      <Container maxWidth="md">
        <Card
          sx={{
            py: 10,
            boxShadow: 1,
            textAlign: 'left',
            paddingLeft: 5,
            paddingRight: 5,
            color: theme.palette.text,
            borderRadius: 5,
            // background: 'linear-gradient(to right bottom, #DDFFFF, #DDFFFF)',
          }}
        >
          <Typography variant="h3" sx={{ mb: 10 }}>
            当院のご紹介
          </Typography>
          <Typography variant="body1">
            <FaceTwoToneIcon />
            <br />
            こんにちは！ 院長の古賀と申します。
            <br />
            <br />
            船橋市に在るカイロプラクティックの施術院では副院長をしておりますが、
            <br />
            埼玉県や東京都北部より来院するお客様が増えたため、このたび蕨にて施術院を開きました。
            <br />
            <br />
            現在、41キロの小柄な女性から100キロの大柄な男性まで様々なお客様に通っていただいています。
            <br />
            <br />
            お待ちしております。
          </Typography>
        </Card>
      </Container>
    </>
  );
}
