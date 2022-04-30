import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image';

export default function Home( {posts, topmenu} ){
  //console.log(topmenu)

  const ifImg = posts.featuredImage;

  return(
    <>
    <Head>
    <title>Home</title>
    <meta name="description" content="home page" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  
    <div className='container mainDiv'>
<div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
 
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100" alt="Sunset Over the City"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
      

  <main className="my-5">
    <div className="container">
      
      <section className="text-center">
        <h4 className="mb-5"><strong>Latest posts</strong></h4>

        <div className="row">
        {
        posts.nodes.map(post => {
          return(
              
         
          <div className="col-lg-4 col-md-12 mb-4" key={post.slug}>
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <Image width="640" height="426" src={post.featuredImage.node.sourceUrl} /> 
                <a href="#!">
                  <div className="mask" ></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <article className="card-text" dangerouslySetInnerHTML={{__html: post.excerpt}}></article>
                <Link href={`/posts/${post.slug}`} ><span className="btn btn-primary">Read More</span></Link>
                
              </div>
            </div>
          </div>
           )
          })
        }

         
        </div>
      </section>
      
      {/*<nav className="my-4" aria-label="...">
        <ul className="pagination pagination-circle justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>*/}
    </div>
  </main>

  
    </div>
    </>
  )

}

export async function getStaticProps(){

  const res = await fetch('http://wp.local/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomePageQuery {
            posts {
              nodes {
                title
                 slug
                 content
                 excerpt
                 featuredImage {
                    node {
                      sourceUrl
                         }
                 }
              }
            }
          }
          `,
      })
  })
  const menu = await fetch('http://wp.local/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `
        query GET_MENUS {
          headerMenus: menuItems(where: {location: PRIMARY}) {
            nodes {
              id
              label
              url
              path
            }
          }
          
        }
        `,
    })
})

  const json = await res.json()

  const tmenu = await menu.json()
//console.log("posts", json)
  return {
    props: {
        posts: json.data.posts,
        topmenu : tmenu.data.headerMenus.nodes
    },
    revalidate:1,
  }

}
