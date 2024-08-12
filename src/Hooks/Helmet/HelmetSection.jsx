/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';

const HelmetSection = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default HelmetSection;