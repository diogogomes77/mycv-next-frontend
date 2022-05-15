import { Grid, Card, Avatar, CardHeader } from '@material-ui/core';

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label='category'>C</Avatar>}
            title='Category'
            subheader='See all'
          ></CardHeader>
        </Card>
      </Grid>
    </Grid>
  );
}
