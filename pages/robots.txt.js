import React from 'react';

class Robots extends React.Component {
    static async getInitialProps({ res }) {
        res.setHeader('Content-Type', 'text/plain');
        res.write("Sitemap: https://seani.vercel.app/sitemap.xml");
        res.end();
    }

}
/*
export async function getServerSideProps({res}) {
    res.setHeader('Content-Type', 'text/plain');
        res.write("Sitemap: https://seani.vercel.app/sitemap.xml");
        res.end('a sale XD');
  }*/
  

export default Robots;