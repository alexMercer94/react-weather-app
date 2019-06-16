import React from 'react';
import PropTypes from 'prop-types';

const WeatherInfo = props => {
    return (
        <div>
            {props.error && (
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            )}
            {props.temperature ? (
                <div className="card card-body">
                    <p>
                        Location: {props.city}. {props.country}
                    </p>
                    <p>
                        Temperature: {props.temperature} °C, {props.description}
                    </p>
                    <p>Humidity: {props.humidity}</p>
                    <p>Wind Speed: {props.wind_speed}</p>
                </div>
            ) : (
                <di className="card card-body">
                    <p>No Request Yet</p>
                </di>
            )}
        </div>
    );
};

WeatherInfo.propTypes = {};

export default WeatherInfo;
