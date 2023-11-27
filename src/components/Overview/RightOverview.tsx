import React from 'react';
import GoogleMapReact from 'google-map-react';

interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => <div className="marker">{text}</div>;

const RightOverview = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className='sm:col-span-4 w-full min-h-[150px]'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCdEvcujrumcXMbNFOXZDewFsrY6I9OYKA" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={10.99835602}
                    lng={77.01502627}
                    text="Kerala"
                />
            </GoogleMapReact>
        </div>
    );
};

export default RightOverview;
