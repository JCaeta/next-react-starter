import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Container.module.css";

export const Container = (props: any) => 
{
    const propStyles = {
        height: props.height
    }

    return (<>
        <section className={styles.container} style={propStyles}>
            {/* <h1 style={{margin: 0}}>Hello</h1> */}
            {props.children}
        </section>
    </>);
}

Container.defaultProps =
{
    height: "80vh",
    children: null
}

Container.propTypes = 
{
    height: PropTypes.string,
    children: PropTypes.element
}