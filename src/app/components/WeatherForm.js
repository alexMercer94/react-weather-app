import React from 'react';
import PropTypes from 'prop-types';

const WeatherForm = ({ getWeather }) => {
    return (
        <div className="card card-body">
            <form onSubmit={getWeather}>
                <div className="form-group">
                    <input type="text" className="form-control" name="city" placeholder="Your city name" autoFocus />
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Your country code" className="form-control" />
                </div>
                <button className="btn btn-success btn-block">Get Weather</button>
            </form>
        </div>
    );
};

WeatherForm.propTypes = {};

export default WeatherForm;
