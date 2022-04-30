import Link from 'next/link'
import Head from 'next/head'

export default function ProductList( {data} ){

const product = data;
console.log(product);
  return(
    <>
    <Head>
    <title>Product List</title>
  </Head>
  
    <div>
    <main className="my-5">
    <div className="container">
      
      <section className="text-center">
        <h4 className="mb-5"><strong>Latest Products</strong></h4>

        <div className="row">
      {
        product.map(item => {
          return(
            <div className="col-lg-4 col-md-12 mb-4" key={item.slug}>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.title.rendered}</h5>
                <article className="card-text" dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}></article>
                <Link href={`/product/${item.slug}`} ><span className="btn btn-primary">Read More</span></Link>
                
              </div>
            </div>
            </div>
          )
        })
    }
    </div>
      </section>
    </div>
  </main>
    </div>
    </>
  )

}

export async function getStaticProps() {
    
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://wp.local/wp-json/wp/v2/product/`)
    const data = await res.json()
    //console.log("pid",page)
    // Pass post data to the page via props
    return { props: { data } }
  }
