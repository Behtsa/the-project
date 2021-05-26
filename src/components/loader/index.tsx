import React from 'react';
import './index.scss';

const Loader = (): React.ReactElement => (
    <div className="loader__container">
        <div className="loader__container__img">
            <img src="loading.gif" />
        </div>
    </div>
)

export default Loader;
