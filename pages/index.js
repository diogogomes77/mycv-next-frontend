import { Grid, Card, Avatar, CardHeader, makeStyles } from '@material-ui/core';
import Layout from '../components/Layout';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '75px auto',
    maxWidth: '95vw',
  },
}));

export default function Home({ projects }) {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className={classes.root} spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label='project'>{project.name.charAt(0)}</Avatar>
                }
                title={project.name}
                subheader={project.description}
              ></CardHeader>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    'https://mycv-django-api-staging.herokuapp.com/projects/'
  );

  return {
    props: { projects: data.results },
  };
}
