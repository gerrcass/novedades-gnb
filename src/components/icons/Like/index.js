import React from 'react';
import PropTypes from 'prop-types';

export default function Like(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="41" height="36" viewBox="0 0 41 36">
            <path fill="#F7076A" fillRule="nonzero" d="M20.3 35.934c-.28 0-.56-.098-.784-.295l-.052-.045c-1.73-1.514-3.354-2.898-4.925-4.237-4.216-3.593-7.857-6.695-10.388-9.705C1.319 18.284 0 15.142 0 11.764 0 8.66 1.052 5.757 2.962 3.59 4.965 1.318 7.742.066 10.784.066c4.278 0 6.986 2.555 8.505 4.699.394.556.73 1.113 1.01 1.638.282-.525.617-1.082 1.011-1.638C22.83 2.62 25.537.066 29.815.066c3.042 0 5.82 1.252 7.822 3.524 1.91 2.167 2.962 5.07 2.962 8.174 0 3.378-1.319 6.52-4.15 9.888-2.531 3.01-6.172 6.112-10.388 9.705-1.572 1.339-3.196 2.723-4.926 4.237l-.052.045a1.187 1.187 0 0 1-.783.295zM10.784 2.445c-2.349 0-4.493.965-6.037 2.718-1.527 1.732-2.368 4.077-2.368 6.6 0 6.107 5.451 10.752 13.702 17.783a553.767 553.767 0 0 1 4.219 3.62c1.47-1.278 2.863-2.465 4.218-3.62C32.769 22.515 38.22 17.87 38.22 11.764c0-2.524-.84-4.869-2.368-6.601-1.544-1.753-3.688-2.718-6.037-2.718-3.261 0-5.37 2.01-6.564 3.695a14.102 14.102 0 0 0-1.82 3.62 1.19 1.19 0 0 1-2.262 0c-.191-.585-.75-2.108-1.821-3.62-1.194-1.686-3.303-3.695-6.564-3.695z" />
        </svg>
    );
}

Like.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Like.defaultProps = {
    className: undefined,
    style: undefined,
};
