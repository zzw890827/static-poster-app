import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import ImgUrl from './assets/img/react-icons.svg';

function Poster({posterData}) {
  var {imageUrl, title, slogan} = posterData;
  return (
    <div className="poster">
      <div className="image">
        <img className="logo" src={imageUrl} alt=""/>
      </div>
      <div className="title">{title}</div>
      <div className="slogan">{slogan}</div>
    </div>
  );
}

Poster.propTypes = {
  posterData: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired
  }).isRequired
};

var data = {
  imageUrl: ImgUrl,
  title: '李文骞',
  slogan: '送你一颗小心心！'
};

ReactDOM.render(
  <Poster posterData={data}/>,
  document.getElementById('root')
);
