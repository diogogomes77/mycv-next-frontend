import { Grid, Card, Avatar, CardHeader, makeStyles } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '75px auto',
    maxWidth: '95vw',
  },
}));

export default function Home({ number }) {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label='category'>C</Avatar>}
              title={`Category ${number}`}
              subheader='See all'
            ></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  // fetch our data

  const number = 5;
  return {
    props: { number: number },
  };
}
