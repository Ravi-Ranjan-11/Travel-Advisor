import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        //ravi1120ranjan// 
        // bootstrapURLKeys={{ key: 'AIzaSyDPQCZuuFsw3P8NOysAzEueA9mwPE7YZkw'}}
        // ravi1103ranjan(new)//
        bootstrapURLKeys={{ key: 'AIzaSyAGQECk9-5Xk8e0nFplNJoS3dL17X2sx84'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked}
        >

        {places?.map((place,i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            >
              {
                !isDesktop ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                      alt=""
                    />
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                  </Paper>
                )
              }
            </div>
        ))}

        </GoogleMapReact>
    </div>
  )
}

export default Map