//import Image from 'next/image'
import Head from 'next/head'
export default function ProductPage( data ){

   const pdata = data.product;
   //console.log("prod",pdata) 
   if(pdata){
var contnt = pdata[0].content.rendered;
   }else{
    var contnt = "No Data";
   } 
  

    return (
        <div>
         <Head>
            <title>{pdata ? pdata[0].title.rendered : <></> }</title>
        </Head>
        
            <h1>{pdata ? pdata[0].title.rendered : <> </> }</h1>
            <article dangerouslySetInnerHTML={{__html: contnt}}></article>
        </div>
    )

}

export const getStaticPaths = async  () => {
const res = await fetch(`http://wp.local/wp-json/wp/v2/product`)


const products = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = products.map((post) => ({
    params: { product: post.id.toString() },
  }))
  //console.log("path",paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }

}


// This also gets called at build time
export async function getStaticProps({ params }) {
    const id = params.product;
   // console.log("prod",id)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://wp.local/wp-json/wp/v2/product/?slug=${id}`)
    const product = await res.json()
    //console.log("pid",page)
    // Pass post data to the page via props
    return { props: { product } }
  }