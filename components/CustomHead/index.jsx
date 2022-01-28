import PropTypes from 'prop-types'; 

export default function CustomHead({Logo}) {
    return (
        <>
            <meta charSet="utf-8" />
            <link rel="icon" href={Logo} />
            <link rel="apple-touch-icon" href={Logo} />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Web site created using create-next-app"
            />
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <link
                href="https://colorlib.com/etc/lf/Login_v1/vendor/bootstrap/css/bootstrap.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://colorlib.com/etc/lf/Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://colorlib.com/etc/lf/Login_v1/vendor/animate/animate.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://colorlib.com/etc/lf/Login_v1/vendor/css-hamburgers/hamburgers.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://colorlib.com/etc/lf/Login_v1/vendor/select2/select2.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://colorlib.com/etc/lf/Login_v1/css/util.css"
                rel="stylesheet"
                type="text/css"
            />
        </>
    );
}

CustomHead.propTypes={
    Logo: PropTypes.string
}
