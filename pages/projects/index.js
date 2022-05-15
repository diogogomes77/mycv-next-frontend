import React from 'react';
import {
  Grid,
  Card,
  Avatar,
  CardHeader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px auto',
    maxWidth: '95vw',
  },
  title: { margin: '75px auto', maxWidth: '95vw' },
  subtitle: { color: 'grey' },
  card: { cursor: 'pointer' },
}));

const Projects = ({ projects }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant='h4' className={classes.title}>
        Projects
      </Typography>
      <Grid container className={classes.root} spacing={3}>
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`}>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label='project'>
                      {project.name.charAt(0)}
                    </Avatar>
                  }
                  title={project.name}
                  subheader={project.description}
                ></CardHeader>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export default Projects;

export async function getServerSideProps() {
  const { data } = await axios.get(
    'https://mycv-django-api-staging.herokuapp.com/projects/'
  );

  return {
    props: { projects: data.results },
  };
}
