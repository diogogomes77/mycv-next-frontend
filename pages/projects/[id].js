import React from 'react';
import axios from 'axios';
import { Grid, Card, Avatar, CardHeader, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '75px auto',
    maxWidth: '95vw',
  },
}));
function Id({ project }) {
  const classes = useStyles();
  return (
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
  );
}

export default Id;

export async function getServerSideProps({ query: { id } }) {
  const { data } = await axios.get(
    `https://mycv-django-api-staging.herokuapp.com/projects/${id}`
  );

  return {
    props: { project: data },
  };
}
