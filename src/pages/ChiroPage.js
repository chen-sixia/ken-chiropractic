import { Helmet } from 'react-helmet-async';
import { Grid, Card, Container, Typography, Link, Divider } from '@mui/material';
import FormatQuoteTwoToneIcon from '@mui/icons-material/FormatQuoteTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';

export default function ChiroPage() {
  return (
    <>
      <Helmet>
        <title> Introduction | Ken Chiropractic </title>
      </Helmet>

      <Container maxWidth="md" sx={{ mb: 10 }}>
        <Grid sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            カイロプラクティックとは
          </Typography>
          <Card
            sx={{
              py: 4,
              boxShadow: 1,
              textAlign: 'left',
              paddingLeft: 5,
              paddingRight: 5,
              // color: theme.palette.text,
              borderRadius: 5,
              // background: 'linear-gradient(to right bottom, #DDFFFF, #DDFFFF)',
            }}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              Chiropractic
            </Typography>
            <FormatQuoteTwoToneIcon />
            <Typography variant="body1" sx={{ mb: 2 }}>
              1895年にアメリカのダニエル・デヴィッド・パーマーによって創始された手技療法。
              <br />
              <br />
              名前の由来はギリシャ語で、
              <br />
              "カイロ" {'->'} "手"、
              <br />
              "プラクティック" {'->'} "技術" を意味する造語。
              <br />
              <br />
              世界保健機関 (WHO) は補完代替医療として位置づけている。
              <br />
            </Typography>
          </Card>
          <PublicTwoToneIcon sx={{ mb: 2, mt: 4 }} />
          <br />
          <Typography variant="body1" sx={{ mb: 2, ml: 4 }}>
            アメリカやイギリス、カナダやオーストラリア、EU諸国の数か国など、
            <br />
            約40か国が、主に筋骨格系の障害を取り扱う、脊椎ヘルスケアの専門職として法制度化している。
            <br />
            日本は、カイロプラクティックのみを対象にした法的な資格制度が存在せず、
            <br />
            民間療法として誰もが自由に開業、医療関連法規に抵触しないことを前提に施術が事実上可能である。
            <br />
          </Typography>
          <FilterVintageTwoToneIcon sx={{ mt: 2 }} />
          <Typography variant="body1" sx={{ mb: 2, ml: 4 }}>
            <br />
            日本には、1916年にパーマーの設立したパーマー・スクール・オブ・カイロプラクティック
            <br />
            （現在のパーマー・カレッジ・オブ・カイロプラクティック）の卒業生である河口三郎が伝えたとされている。
            <br />
            同校初の日本人卒業生は森久保重太郎である。
            <br />
            国民生活センターは整体、カイロプラクティック、マッサージなどの重症事例を
            <br />
            「手技による医業類似行為の危害の報告書」として2012年にまとめ、
            <br />
            カイロプラクティックは法的資格制度がなく、施術者の技術水準や施術方法などの差異を指摘した。
            <br />
            <br />
            国民生活センターの要請に、業界の対応として日本カイロプラクターズ協会(JAC)は
            <br />
            「カイロプラクティックの安全性に関するガイドラインおよびカイロプラクティックの広告に関するガイドライン」を発表し、
            <br />
            利用者の安全性を高める目的で、特定の対象者に対して安全教育プログラムを開始した。
            <br />
            WFCに加盟する日本の代表団体は日本カイロプラクターズ協会 (JAC)である。
            <br />
            2014年から自主規制として日本カイロプラクティック登録機構
            (JCR)により一定の基準を満たしたカイロプラクターの登録制度が始まった。
          </Typography>
          <Typography variant="caption" sx={{ mb: 5, ml: 4 }}>
            <Link
              underline="none"
              href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%A4%E3%83%AD%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF"
            >
              出典: ウィキペディア (Wikipedia)
            </Link>
          </Typography>
        </Grid>
        <Typography variant="h3" sx={{ mb: 5 }}>
          カイロプラクティックの関連記事
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Link
          underline="always"
          href="https://spineandposture.com/how-chiropractic-care-supports-the-lymphatic-system/"
        >
          How Chiropractic Care Supports the Lymphatic System
        </Link>
        <br />
        <FormatQuoteTwoToneIcon sx={{ mt: 2 }} />
        <Typography variant="body1" sx={{ mb: 2, ml: 4 }}>
          While chiropractic care is commonly sought out to treat misalignment in the bones and joints, as well as the
          muscles, tendons, and ligaments of the body, chiropractic care also has a powerful therapeutic effect on the
          other body systems. The direct effects of chiropractic occur on the neuromusculoskeletal system. <br />
          That means that the nervous system, muscular system, and skeletal system are the first to receive benefits
          from applied chiropractic care. Chiropractic helps to immediately mobilize stuck or misaligned joints, reduce
          muscular tension, alleviate nerve inflammation and pain, and improve the ways that the body systems work with
          one another. <br />
          In addition to directly treating the neuromusculoskeletal system, chiropractic care also helps treat other
          systems. Read on to learn how chiropractic care supports the lymphatic system.
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Link
          underline="always"
          href="https://www.cancerresearchuk.org/about-cancer/cancer-in-general/treatment/complementary-alternative-therapies/individual-therapies/chiropractic-care"
        >
          Chiropractic | Cancer Research UK
        </Link>
        <br />
        <FormatQuoteTwoToneIcon sx={{ mt: 2 }} />
        <Typography variant="body1" sx={{ mb: 2, ml: 4 }}>
          Chiropractors diagnose and treat problems affecting the bones, joints and muscles. <br />
          This is called the musculoskeletal system. It can help with some symptoms of cancer and its treatment.
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </Container>
    </>
  );
}
