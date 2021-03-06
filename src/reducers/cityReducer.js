const initialWeatherState = {
    cityName: '',
    forecast: {}
};


const cityReducer = (state = initialWeatherState, action) => {
    if (action.type === 'WEATHER_SUCCESS') {
        return {
            ...state,
            cityName: action.cityName,
            forecast: action.forecast
        }
    }
    else{
        return state;
    }
};


export default cityReducer
