import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Abdullah Naveed is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="abdullah, abdullah naveed, naveed, web developer, lahore web developer, lahore developer, mern stack, abdullah portfolio"
      />
      <meta property="og:title" content="Abdullah Naveed Portfolio" />
      
      <meta
        property="og:description"
        content="Web / Mobile Application Developer"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />

      
    
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Abdulrasheed Ibrahim",
};
