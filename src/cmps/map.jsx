import React from "react"
import GoogleMapReact from 'google-map-react'
import { useState } from "react"


const AnyReactComponent = ({ text }) => <div style={{ fontSize: '25px' }}> {text}</div >

export function Map() {

    const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
    const zoom = 11
    const citiesPos = [
        { city: 'Tel Aviv', pos: { lat: 32.0737399587, lng: 34.7724082733 } },
        { city: 'Be\'er Sheva', pos: { lat: 31.244287, lng: 34.799165 } },
        { city: 'Rehovot', pos: { lat: 31.910610, lng: 34.806335 } }
    ]

    const onClick = ({ lat, lng }) => {
        setCoordinates({ lat, lng })
    }

    const onChangePos = (coordinates) => {
        setCoordinates(coordinates)
    }

    return (
        <section className="map">
            <div style={{ height: '50vh', width: '100%', margin: 'auto' }}>
                <GoogleMapReact
                    onClick={onClick}
                    bootstrapURLKeys={'apikey'} // Put your api_key here
                    // defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={zoom}>
                    {citiesPos.map(({ pos: { lat, lng } }) => {
                        return (<AnyReactComponent
                            lat={lat}
                            lng={lng}
                            text="🏪"
                        />)
                    })}
                </GoogleMapReact>
            </div>

            <section className="map-btns">
                <div>
                    <button variant="outlined"
                        onClick={() => onChangePos({ lat: 32.0737399587, lng: 34.7724082733 })}>
                        Tel Aviv
                    </button>
                    <p>
                        Tchernikhovski Street 203
                        <br /> Tel Aviv, Israel
                        <br /> 03-968-0146
                    </p>
                </div>
                <div>
                    <button variant="outlined"

                        onClick={() => onChangePos({ lat: 31.244287, lng: 34.799165 })}>
                        Be'er Sheva
                    </button>
                    <p>
                        Yitshak Ben Zvi 24
                        <br /> Be'er Sheva, Israel
                        <br /> 08-954-1460
                    </p>
                </div>
                <div>
                    <button variant="outlined"
                        onClick={() => onChangePos({ lat: 31.910610, lng: 34.806335 })}>
                        Rehovot
                    </button>
                    <p>
                        Hillel And Hanan Oppenheimer 21
                        <br /> Rehovot, Israel
                        <br /> 08-931-5817
                    </p>
                </div>
            </section>
        </section>
    )
}