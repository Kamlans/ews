import React from 'react'
import SubPage from '../../Pages/SubPage';

function Error() {
    return (
        <div style={styles.error}>
            
           
            <SubPage  sf = "Error 404" title="Page not found." />
        </div>
    )
}

const styles = {

    error: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontWeight: "bold",
        height: "100vh",
        width: "100%"
    }
};

export default Error
