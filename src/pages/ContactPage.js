import { Helmet } from 'react-helmet-async';
import { Container, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';

export default function ContactPage() {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Contact | Ken Chiropractic </title>
      </Helmet>
      <Container maxWidth="md">
        <Grid item xs={6}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            営業時間・アクセス
          </Typography>

          <Typography variant="h5" sx={{ mb: 5, mt: 5 }}>
            <AccessTimeTwoToneIcon /> 営業時間
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>営業時間</TableCell>
                  <TableCell align="right">月</TableCell>
                  <TableCell align="right">火</TableCell>
                  <TableCell align="right">水</TableCell>
                  <TableCell align="right">木</TableCell>
                  <TableCell align="right">金</TableCell>
                  <TableCell align="right">土</TableCell>
                  <TableCell align="right">日</TableCell>
                  <TableCell align="right">祝</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="test" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    9:00 ~ 20:00
                  </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                </TableRow>
                <TableRow key="test" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    9:00 ~ 21:00
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">
                    <CheckCircleOutlineTwoToneIcon />
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right"> </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h5" sx={{ mb: 2, mt: 10 }}>
            <AddIcCallTwoToneIcon /> 問い合わせ・予約
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            施術院はマンションの一室のため、完全予約制ですが、お気軽にお電話ください。
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            090-9818-4640
          </Typography>

          <Button
            href="tel:090-9818-4640"
            target="_blank"
            variant="contained"
            sx={{ background: theme.palette.primary.main, mb: 2 }}
          >
            電話をかける
          </Button>
          <br />
          <Typography variant="caption" sx={{ mb: 5 }}>
            英語対応: 可 <br />
            中国語対応: 読み書き 可
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <MapTwoToneIcon /> アクセス
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            埼玉県蕨市中央1-33-3レジデンスLINDO 203
          </Typography>
          <Typography variant="caption">蕨駅から210m</Typography>
          <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
            マンション一階がカドワキ時計店、同ビルの203号室が施術院です。
            <br />
            入り口のインターホンで「203」と押してください。
          </Typography>

          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51757.133757961215!2d139.6183676582031!3d35.82887070000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018eb213c6559cd%3A0xfaf2d2be70b249a6!2zS2Vu44Kr44Kk44Ot44OX44Op44Kv44OG44Kj44OD44Kv!5e0!3m2!1sen!2sjp!4v1671335810220!5m2!1sen!2sjp"
              width="600"
              title="map"
              height="450"
              style={{ border: '' }}
              allowfullscreen=""
              aria-hidden="false"
            />
          </div>
        </Grid>
      </Container>
    </>
  );
}
